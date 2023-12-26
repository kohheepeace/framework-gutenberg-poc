/**
 * This file is corresponding to the editor component of the edit-post/editor.js
 * - https://github.com/WordPress/gutenberg/blob/c90bb031ee5ee72ec382c10a123cd713e9c78f65/packages/edit-post/src/editor.js
 * - https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/src/components/provider/index.js
 */

/**
 * External dependencies
 */
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { debounce } from "lodash";

/**
 * WordPress dependencies
 */
import { SlotFillProvider } from "@wordpress/components";
import { BlockEditorProvider } from "@wordpress/block-editor";
import { registerCoreBlocks } from "@wordpress/block-library";
import { serialize, parse } from "@wordpress/blocks";

// import paragraph from "@wordpress/block-library/build-module/paragraph/init";

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
// import editorSettings from "./editorSettings.json";
import editorSettings from "../../gutenberg/editorSettings";
import Header from "./Header";
import VisualEditor from "./VisualEditor";

import Sidebar from "./Sidebar";
import SecondarySidebar from "./SecondarySidebar";
import { editorModeAtom, postAtom } from "./atoms";
import TextEditor from "./TextEditor";
import { updatePost } from "../../localApi/posts";

registerCoreBlocks();

function Editor() {
	/**
	 * Atoms
	 */
	const [editorMode] = useAtom(editorModeAtom);
	const [post] = useAtom(postAtom);
	const [blocks, setBlocks] = useState(parse(post.content));
	const [selection, setSelection] = useState();

	// Call updatePost in a debounced way
	const debouncedUpdatePost = debounce(
		() => updatePost(post.id, { ...post, content: serialize(blocks) }),
		300
	); // Replace 'your-post-id' with the actual post id

	function onInput(blocks, { selection }) {
		setBlocks(blocks);
		setSelection(selection);
		debouncedUpdatePost();
	}

	// This already works like debounce.
	function onChange(blocks, { selection }) {
		setBlocks(blocks);
		setSelection(selection);
		debouncedUpdatePost();
	}

	return (
		<div id="editor" className="block-editor__container">
			<SlotFillProvider>
				<BlockEditorProvider
					value={blocks}
					onChange={onChange}
					onInput={onInput}
					selection={selection}
					useSubRegistry={false}
					settings={{
						...editorSettings,
					}}
				>
					<div className="edit-post-layout">
						<Header />

						<div className="edit-post-body">
							<SecondarySidebar />

							{/* Editor */}
							<>
								{editorMode === "text" && <TextEditor />}

								{editorMode === "visual" && <VisualEditor />}
							</>

							<Sidebar />
						</div>
					</div>
				</BlockEditorProvider>
			</SlotFillProvider>
		</div>
	);
}

export default Editor;
