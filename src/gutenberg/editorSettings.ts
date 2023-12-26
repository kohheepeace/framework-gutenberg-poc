import themeJson from "./theme.json";
import coreThemeJson from "./core-theme.json";

const editorSettings = {
	appearanceTools: true,
	useRootPaddingAwareAlignments: true,
	__experimentalFeatures: {
		color: {
			...coreThemeJson.settings.color,
			palette: {
				default: [
					coreThemeJson.settings.color.palette,
					themeJson.settings.color.palette,
				],
			},
		},
		typography: { ...themeJson.settings.typography },
	},
};

export default editorSettings;
