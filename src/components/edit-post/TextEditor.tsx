/**
 * jsx: https://github.com/WordPress/gutenberg/blob/d9ea8d072626f5ad1e5d50ab4207590cfa170b4a/packages/edit-post/src/components/text-editor/index.js#L20
 *
 * scss: No important css
 * https://github.com/WordPress/gutenberg/blob/d9ea8d072626f5ad1e5d50ab4207590cfa170b4a/packages/edit-post/src/components/text-editor/style.scss
 */

/**
 * External dependencies
 */
import { useAtom } from "jotai";
import Textarea from "react-autosize-textarea";

/**
 * WordPress dependencies
 */
import { Button } from "@wordpress/components";
import { serialize } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import { editorModeAtom } from "./atoms";

export default function TextEditor() {
	const [, setEditorMode] = useAtom(editorModeAtom);

	return (
		<div className="edit-post-text-editor p-6 w-full grow">
			<div className="edit-post-text-editor__toolbar">
				<Button variant="tertiary" onClick={() => setEditorMode("visual")}>
					{"Exit text editor"}
				</Button>
			</div>
			<div className="edit-post-text-editor__body">
				<Textarea
					autoComplete="off"
					dir="auto"
					// value={serialize(post.blocks)}
					value={""}
					className="editor-post-text-editor w-full bg-surface text-on-surface"
					placeholder={"Start writing with text or HTML"}
				/>
			</div>
		</div>
	);
}
