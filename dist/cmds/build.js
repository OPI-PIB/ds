'use strict';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
Object.defineProperty(exports, '__esModule', { value: true });
const fs_extra_1 = require('fs-extra');
const build_icons_1 = require('../classes/build-icons');
exports.command = 'build [dist]';
exports.aliases = ['b'];
exports.desc = 'Generate ds files';
exports.builder = {
	dist: {
		default: 'public'
	}
};
exports.handler = (argv) => {
	(0, fs_extra_1.ensureDirSync)(argv.dist);
	build_icons_1.IconsBuilder.build(argv.dist);
};
