#!/usr/bin/env node
'use strict';
const lightFormat = require('date-fns/lightFormat');
const {generateFromDirectory} = require('@jleeothon/chachalaca-core');
const {program} = require('commander');

function date() {
	return lightFormat(new Date(), 'yyyy-MM-dd-HH-mm-ss');
}

async function action(source, destination = null) {
	destination = destination || ['comprobantes', '-', date(), '.xlsx'].join('');
	return generateFromDirectory(source, destination);
}

program.arguments('<source> [destination]').action(action);
program.parseAsync(process.argv);
