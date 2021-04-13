import formidable from 'formidable';
const tmp = require('tmp');
const { readFileSync } = require('fs');
const AWS = require('aws-sdk');
// const bunyan = require('bunyan');
const pMap = require('p-map');
const formatISO = require('date-fns/formatISO');
const chachalacaCore = require('@jleeothon/chachalaca-core');

// const log = bunyan.createLogger({ name: 'chachalaca' });

const s3Endpoint = process.env.S3_ENDPOINT;
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const spacesEndpoint = new AWS.Endpoint(s3Endpoint);
if (!accessKeyId || !secretAccessKey) {
    log.error('Did not find credentials for S3');
    throw new Error('Did not find credentials for S3');
}

const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId,
    secretAccessKey
});


const { generateFromFiles } = chachalacaCore;

// Disable default body parser so formidable works
export const config = {
    api: {
        bodyParser: false,
    }
};

const formidableOpts = {
    multiples: true,
    keepExtensions: true,
    filter: ({ mimeType }) => mimeType === 'text/xml'
};

const form = formidable(formidableOpts);

export default async function (request, response) {
    // const [_fields, files] = await pify(form.parse, {multiArgs: true})(request);
    const {files} = await (new Promise((resolve, reject) => {
        form.parse(request, (error, fields, files) => {
            if (error) {
                return reject(error);
            }
            return resolve({fields, files: files.files});
        });
    }));
    const filePaths = files.map(file => file.path);
    await uploadFiles(filePaths);

    const temporaryFilePath = tmp.tmpNameSync() + '.xlsx';
    await generateFromFiles(filePaths, temporaryFilePath);
    const responseType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    // response.type(responseType);
    response.setHeader('Content-Type', 'text/html');
    response.send(readFileSync(temporaryFilePath));
};

async function uploadFiles(filePaths) {
    const dateTime = formatISO(new Date()).replace(/\D/g, '-').slice(0, -1);
    const date = formatISO(new Date(), { representation: 'date' });
    const { length } = filePaths.length.toString();

    const fileInfos = filePaths.map((filePath, index) => {
        const paddedIndex = (index + 1).toString().padStart(length, '0');
        const key = `${date}/${dateTime} - ${paddedIndex}.xml`;
        return { key, path: filePath };
    });

    return pMap(fileInfos, (fileInfo) => uploadFile(fileInfo), { concurrency: 3 });
}

async function uploadFile({ key, path }) {
    const parameters = {
        Bucket: 'chachalaca-space-1',
        Key: key,
        Body: readFileSync(path),
        ACL: 'private'
    };

    return new Promise((resolve, reject) => {
        s3.upload(parameters, (err, data) => {
            if (err) {
                return reject(err);
            }

            return resolve(data);
        });
    });
}
