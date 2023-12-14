/**
 * - https://github.com/WordPress/gutenberg/blob/a51534b6b374879e602c41ee171563452ac9115f/packages/edit-post/src/components/sidebar/settings-sidebar/index.js#L93
 * - https://github.com/WordPress/gutenberg/blob/0576c01a59941a41672331be2c16cf60bbda52a2/packages/edit-post/src/components/sidebar/plugin-sidebar/index.js#L94
 */

/**
 * External deps
 */

import { useAtom } from "jotai";

/**
 * Wordpress Dependencies
 */
import { BlockInspector } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { isInspectorOpenedAtom } from "./atoms";
import "./Sidebar.scss";

export default function Sidebar() {
	/**
	 * Atoms
	 */
	const [isInspectorOpened] = useAtom(isInspectorOpenedAtom);

	if (isInspectorOpened) {
		// https://blog.pagesd.info/2020/06/02/sidebar-css-animation/
		return (
			<div className="edit-post-sidebar">
				<BlockInspector />
			</div>
		);
	} else {
		return null;
	}
}
