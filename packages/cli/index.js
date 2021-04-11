#!/usr/bin/env node
'use strict';
const lightFormat = require('date-fns/lightFormat');
const {generateFromDirectory} = require('@jleeothon/chachalaca-core');
const {program} = require('commander');
const bunyan = require('bunyan');

const log = bunyan.createLogger({
	name: 'chachalaca',
	serializers: bunyan.stdSerializers
});

function date() {
	return lightFormat(new Date(), 'yyyy-MM-dd-HH-mm-ss');
}

async function action(source, destination = null) {
	destination = destination || ['comprobantes', '-', date(), '.xlsx'].join('');
	return generateFromDirectory(source, destination);
}

program
	.arguments('<source> [destination]')
	.action(async (source, destination) => {
		return action(source, destination).catch(error => console.error(error));
	});
program.parseAsync(process.argv);
