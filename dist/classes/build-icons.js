'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.IconsBuilder = void 0;
const path_1 = require('path');
const fs_extra_1 = require('fs-extra');
const iconName = 'ds-icon';
const imgName = 'ds-img';
class IconsBuilder {
	static build(dist) {
		const PACKAGE_ROOT = (0, path_1.resolve)(__dirname, '..', '..');
		const iconsDir = (0, path_1.join)(PACKAGE_ROOT, 'icons');
		const distIcons = (0, path_1.join)(dist, 'icons');
		(0, fs_extra_1.copyFileSync)((0, path_1.join)(PACKAGE_ROOT, 'dist', 'index.css'), dist);
		console.log(`✅ Skopiowano plik index.css do katalogu: ${dist}`);
		(0, fs_extra_1.copyFileSync)((0, path_1.join)(PACKAGE_ROOT, 'src', 'index-prime.css'), dist);
		console.log(`✅ Skopiowano plik index-prime.css do katalogu: ${dist}`);
		(0, fs_extra_1.ensureDirSync)(distIcons);
		const iconFiles = (0, fs_extra_1.readdirSync)(iconsDir).filter(
			(file) => (0, path_1.extname)(file).toLowerCase() === '.svg'
		);
		for (const file of iconFiles) {
			(0, fs_extra_1.copyFileSync)((0, path_1.join)(iconsDir, file), (0, path_1.join)(distIcons, file));
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
	.map((file) => (0, path_1.basename)(file, '.svg'))
	.map(
		(file) =>
			`.${iconName}-${file}{mask-image: url('${file}.svg');}\n.${imgName}-${file}{background-image: url('${file}.svg');}`
	)
	.join('\n')}
`;
		(0, fs_extra_1.writeFileSync)((0, path_1.join)(distIcons, 'ds-icons.css'), cssContent);
		console.log(`✅ Wygenerowano plik ds-icons.css dla ikon w katalogu: ${distIcons}`);
	}
}
exports.IconsBuilder = IconsBuilder;
