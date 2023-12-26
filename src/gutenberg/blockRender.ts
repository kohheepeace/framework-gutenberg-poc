import generateGlobalStyles from "./generateGlobalStyles";

const customBlocks = [];

export default function blockRender(htmlString: string) {
	const dom = new DOMParser().parseFromString(htmlString, "text/html");

	// Custom Blocks
	customBlocks.forEach((customBlock) => {
		customBlock.process(dom);
	});

	// Generate and Insert Global Styles
	const style = document.createElement("style");
	style.textContent = generateGlobalStyles();
	dom.body.prepend(style);

	// Block Supports

	return dom.body.innerHTML;
}
