import { mkdirSync, writeFileSync } from 'fs';
import { basename } from 'path';

import { webfont } from 'webfont';

const fontName = 'ds-icons';
const iconName = 'ds-icon';

const result = await webfont({
	files: 'icons/*.svg',
	fontName,
	formats: ['woff2', 'woff']
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
	display: var(--ds-icon-display, inline-block); 
	font-feature-settings: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-style: normal;
	font-synthesis: none;
	font-variant: normal;
	line-height: 1;
	text-align: center;
	text-rendering: auto;
  vertical-align: var(--ds-icon-vertical-align, text-top);
}
${(result.glyphsData || [])
	.map(
		(glyph) =>
			`.${iconName}-${basename(glyph.srcPath, '.svg')}::before { content: "\\${glyph.metadata.unicode[0].charCodeAt(0).toString(16)}"; }`
	)
	.join('\n')}
`;
writeFileSync(`fonts/${fontName}.css`, cssContent);

console.log('✅ Font generated!');
