import { readdirSync, writeFileSync } from 'fs';
import { basename, extname } from 'path';

const fileName = 'ds-icons';
const iconName = 'ds-icon';
const imgName = 'ds-img';

const iconFiles = readdirSync('icons')
	.filter((file) => extname(file).toLowerCase() === '.svg')
	.map((file) => basename(file, '.svg'));

const cssContent = `
[class^='${iconName}-'],
[class*=' ${iconName}-'] {
	display: var(--ds-icon-display, inline-block);
	line-height: 1;
	width: var(--ds-icon-size, 1em);
	height: var(--ds-icon-size, 1em);
	vertical-align: var(--ds-icon-vertical-align, text-bottom);
	print-color-adjust: exact;
	background-color: var(--ds-icon-color, currentColor);
	mask-repeat: no-repeat;
	mask-position: center;
	mask-size: contain;
}
[class^='${imgName}-'],
[class*=' ${imgName}-'] {
	display: var(--ds-icon-display, inline-block);
	line-height: 1;
	width: var(--ds-icon-size, 1em);
	height: var(--ds-icon-size, 1em);
	vertical-align: var(--ds-icon-vertical-align, text-bottom);
	print-color-adjust: exact;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
}
@media (prefers-color-scheme: dark) {
  [class^='${imgName}-'],
	[class*=' ${imgName}-'] {
    background-color: var(--color-white); 
		outline: 2px solid var(--color-white);
  }
}
${(iconFiles || []).map((file) => `.${iconName}-${file}{mask-image: url('${file}.svg');}\n.${imgName}-${file}{background-image: url('${file}.svg');}`).join('\n')}
`;
writeFileSync(`icons/${fileName}.css`, cssContent);

console.log('✅ CSS generated!');
