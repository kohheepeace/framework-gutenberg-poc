/**
 * https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-post/src/components/layout/index.js
 */

/**
 * External dependencies
 */
import { useAtom } from "jotai";
// import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockCommands } from "@wordpress/block-editor";
import { InterfaceSkeleton } from "@wordpress/interface";
// import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Internal dependencies
 */
import "./Layout.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SecondarySidebar from "./SecondarySidebar";
import { editorModeAtom } from "./atoms";
import TextEditor from "./TextEditor";

export default function EditPostLayout() {
	/**
	 * Atoms
	 */
	const [editorMode] = useAtom(editorModeAtom);

	useBlockCommands();

	const styles = "";

	return (
		<InterfaceSkeleton
			isDistractionFree={false}
			className={""}
			header={<Header />}
			secondarySidebar={<SecondarySidebar />}
			sidebar={<Sidebar />}
			content={
				<>
					{editorMode === "text" && <TextEditor />}

					{/* {editorMode === "visual" && <VisualEditor styles={styles} />} */}
				</>
			}
		/>
	);
}
