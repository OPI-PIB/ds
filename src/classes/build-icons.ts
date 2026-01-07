import { basename, extname, join, resolve } from 'path';

import { copyFileSync, ensureDirSync, readdirSync, writeFileSync } from 'fs-extra';

const iconName = 'ds-icon';
const imgName = 'ds-img';

export class IconsBuilder {
	static build(dist: string) {
		const PACKAGE_ROOT = resolve(__dirname, '..', '..');
		const iconsDir = join(PACKAGE_ROOT, 'icons');
		const distIcons = join(dist, 'icons');

		copyFileSync(join(PACKAGE_ROOT, 'dist', 'index.css'), dist);
		console.log(`✅ Skopiowano plik index.css do katalogu: ${dist}`);

		copyFileSync(join(PACKAGE_ROOT, 'src', 'index-prime.css'), dist);
		console.log(`✅ Skopiowano plik index-prime.css do katalogu: ${dist}`);

		ensureDirSync(distIcons);
		const iconFiles = readdirSync(iconsDir).filter((file) => extname(file).toLowerCase() === '.svg');

		for (const file of iconFiles) {
			copyFileSync(join(iconsDir, file), join(distIcons, file));
			console.log(`✅ Skopiowano ikony do katalogu: ${distIcons}`);
		}

		const cssContent = `
[class^='${iconName}-'],
[class*=' ${iconName}-'] {
  display: var(--ds-icon-display, inline-block);
  line-height: 1;
  width: var(--ds-icon-size, 1em);
  height: var(--ds-icon-size, 1em);
  vertical-align: var(--ds-icon-vertical-align, baseline);
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
  vertical-align: var(--ds-icon-vertical-align, baseline);
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
${(iconFiles || [])
	.map((file) => basename(file, '.svg'))
	.map(
		(file) =>
			`.${iconName}-${file}{mask-image: url('${file}.svg');}\n.${imgName}-${file}{background-image: url('${file}.svg');}`
	)
	.join('\n')}
`;
		writeFileSync(join(distIcons, 'ds-icons.css'), cssContent);
		console.log(`✅ Wygenerowano plik ds-icons.css dla ikon w katalogu: ${distIcons}`);
	}
}
