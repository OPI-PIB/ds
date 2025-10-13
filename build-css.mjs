import { readdirSync, writeFileSync } from 'fs';
import { basename, extname } from 'path';

const fileName = 'ds-icons';
const iconName = 'ds-icon';
const imgName = 'ds-img';

const iconFiles = readdirSync('icons')
	.filter((file) => extname(file).toLowerCase() === '.svg')
	.map((file) => basename(file, '.svg'));

const cssContent = `
[class^="${iconName}-"], [class*=" ${iconName}-"] {
  speak: none; 
	display: var(--ds-icon-display, inline-block);
	background-color: var(--ds-icon-color, currentColor);
	mask-repeat: no-repeat; 
	mask-position: center; 
	mask-size: contain;
	line-height: 1;
	width: var(--ds-icon-size, 1em);
	height: var(--ds-icon-size, 1em);
	vertical-align: var(--ds-icon-vertical-align, text-bottom);
}
[class^="${imgName}-"], [class*=" ${imgName}-"] {
  speak: none; 
	display: var(--ds-icon-display, inline-block);
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	line-height: 1;
	width: var(--ds-icon-size, 1em);
	height: var(--ds-icon-size, 1em);
	vertical-align: var(--ds-icon-vertical-align, text-bottom);
}
${(iconFiles || []).map((file) => `.${iconName}-${file}{mask-image: url('${file}.svg');}\n.${imgName}-${file}{background-image: url('${file}.svg');}`).join('\n')}
`;
writeFileSync(`icons/${fileName}.css`, cssContent);

console.log('✅ CSS generated!');
