import format from 'date-fns/format';
import { useUser } from '@auth0/nextjs-auth0';

export default function FileUploadForm() {
    const {user, error} = useUser();
    if (error) {
        console.error(error);
        return null;
    }

    if (!user) {
        return null;
    }

    return (<div>
      Escoger archivos
        <form id="file-form">
        <input type="file" id="file-input" webkitdirectory="" directory="" onChange={fileInputOnChange}/>
        </form>
      </div>);
};

function fileInputOnChange(event) {
    const formData = new FormData();
    const fileInput = event.target;
    for (const f of fileInput.files) {
        if (f.type === 'text/xml') {
            formData.append('files', f);
        }
    }

    const request = new XMLHttpRequest();
    request.responseType = 'blob';
    request.addEventListener('load', requestOnLoad);
    request.open('POST', '/api/generate');
    request.send(formData);
  }

function requestOnLoad(event) {
    if (event.target.status === 200) {
        console.log(event.target);
        const a = document.createElement('a');
        a.style = 'display: none';
        document.body.append(a);
        const dateTime = format(new Date(), 'yyyy-MM-dd-aa-hh-mm-ss');
        
        const url = window.URL.createObjectURL(this.response);
        a.href = url;
        a.download = `comprobantes-${dateTime}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
