import { cssTw } from '@opi_pib/stylelint-config-base';

/** @type {import('stylelint').Config} */
export default {
	...cssTw,
	ignoreFiles: ['dist/**', 'node_modules/**', 'fonts/**']
};
