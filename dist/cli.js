#!/usr/bin/env node
'use strict';
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-expressions */
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const helpers_1 = require('yargs/helpers');
const yargs_1 = __importDefault(require('yargs/yargs'));
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
	.commandDir('cmds')
	.demandCommand()
	.help().argv;
