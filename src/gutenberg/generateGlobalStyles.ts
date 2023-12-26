import themeJson from "./theme.json";

function generateCssFromColors(colorPalette) {
	let cssVariables = "";
	let cssRules = "";

	colorPalette.forEach((color) => {
		cssVariables += `--wp--preset--color--${color.slug}: ${color.color};\n`;

		cssRules += `
.has-${color.slug}-color {
color: var(--wp--preset--color--${color.slug}) !important;
}

.has-${color.slug}-background-color {
background-color: var(--wp--preset--color--${color.slug}) !important;
}

.has-${color.slug}-border-color {
border-color: var(--wp--preset--color--${color.slug}) !important;
}
`;
	});

	return { cssVariables, cssRules };
}

function generateCssFromFontSizes(fontSizes) {
	let cssVariables = "";
	let cssRules = "";

	fontSizes.forEach((fontSize) => {
		if (fontSize.fluid) {
			cssVariables += `--wp--preset--font-size--${fontSize.slug}: clamp(${fontSize.fluid.min}, ${fontSize.fluid.min} + ((1vw - 0.2rem) * 0.227), ${fontSize.fluid.max});\n`;
		} else {
			cssVariables += `--wp--preset--font-size--${fontSize.slug}: ${fontSize.size};\n`;
		}

		cssRules += `
.has-${fontSize.slug}-font-size {
font-size: var(--wp--preset--font-size--${fontSize.slug}) !important;
}
`;
	});

	return { cssVariables, cssRules };
}

export default function generateGlobalStyles() {
	const { cssVariables: colorVariables, cssRules: colorRules } =
		generateCssFromColors(themeJson.settings.color.palette);
	const { cssVariables: fontSizeVariables, cssRules: fontSizeRules } =
		generateCssFromFontSizes(themeJson.settings.typography.fontSizes);

	return `body{${colorVariables}${fontSizeVariables}}${colorRules}${fontSizeRules}`;
}
