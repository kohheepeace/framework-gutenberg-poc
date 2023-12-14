/**
 * This file is corresponding to the editor component of the edit-post/editor.js
 * - https://github.com/WordPress/gutenberg/blob/c90bb031ee5ee72ec382c10a123cd713e9c78f65/packages/edit-post/src/editor.js
 * - https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/src/components/provider/index.js
 */

/**
 * External dependencies
 */
import { useState } from "react";

/**
 * WordPress dependencies
 */
import { SlotFillProvider } from "@wordpress/components";
import { BlockEditorProvider } from "@wordpress/block-editor";

/**
 * WordPress style dependencies
 */
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";
import "@wordpress/block-editor/build-style/content.css";

/**
 * Internal dependencies
 */
import "./Editor.scss";
import Layout from "./Layout";

const editorSettings = {};

function Editor() {
	const [blocks, setBlocks] = useState([]);
	const [selection, setSelection] = useState();

	function onInput(blocks, { selection }) {
		setBlocks(blocks);
		setSelection(selection);
	}

	// This already works like debounce.
	function onChange(blocks, { selection }) {
		setBlocks(blocks);
		setSelection(selection);
	}

	return (
		<div id="editor" className="block-editor__container">
			<SlotFillProvider>
				<BlockEditorProvider
					value={blocks}
					onChange={onChange}
					onInput={onInput}
					selection={selection}
					settings={editorSettings}
					useSubRegistry={false}
				>
					<Layout />
				</BlockEditorProvider>
			</SlotFillProvider>
		</div>
	);
}

export default Editor;
