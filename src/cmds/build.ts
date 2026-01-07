/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { ensureDirSync } from 'fs-extra';

import { IconsBuilder } from '../classes/build-icons';

exports.command = 'build [dist]';
exports.aliases = ['b'];
exports.desc = 'Generate ds files';
exports.builder = {
	dist: {
		default: 'public'
	}
};

type Argv = {
	dist: string;
};

exports.handler = (argv: Argv) => {
	ensureDirSync(argv.dist);

	IconsBuilder.build(argv.dist);
};
