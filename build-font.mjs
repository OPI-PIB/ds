import { mkdirSync, writeFileSync } from 'fs';
import { basename } from 'path';

import { webfont } from 'webfont';

const fontName = 'ds-icons';
const iconName = 'ds-icon';

const result = await webfont({
	files: 'icons/*.svg',
	fontName,
	formats: ['woff2', 'woff'],
	normalize: true,
	fontHeight: 512
});

mkdirSync('fonts', { recursive: true });

writeFileSync(`fonts/${fontName}.woff`, result.woff);
writeFileSync(`fonts/${fontName}.woff2`, result.woff2);

const cssContent = `
@font-face {
  font-family: "${fontName}";
  src: url("${fontName}.woff2") format("woff2"),
       url("${fontName}.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

[class^="${iconName}-"], [class*=" ${iconName}-"] {
  font-family: "${fontName}" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  display: inline-block;
}
${(result.glyphsData || [])
	.map(
		(glyph, i) =>
			`.${iconName}-${basename(glyph.srcPath, '.svg')}::before { content: "\\${(0xe001 + i).toString(16)}"; }`
	)
	.join('\n')}
`;
writeFileSync(`fonts/${fontName}.css`, cssContent);

console.log('✅ Font generated!');
