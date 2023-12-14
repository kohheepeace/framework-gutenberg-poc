// https://github.com/WordPress/gutenberg/blob/trunk/packages/edit-post/src/components/header/index.js
// Inserter Button: https://github.com/WordPress/gutenberg/blob/702fd1b77504a7999c4f8bc0cd0abecfe99b0358/packages/edit-post/src/components/header/header-toolbar/index.js

/**
 * External dependencies
 */
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

/**
 * WordPress dependencies
 */
import { Button } from "@wordpress/components";
import { alignRight, plus } from "@wordpress/icons";

/**
 * Internal dependencies
 */
import "./Header.scss";
import { isInserterOpenedAtom, isInspectorOpenedAtom } from "./atoms";

export default function Header() {
	/**
	 * Hooks
	 */
	const inserterButton = useRef();
	const navigate = useNavigate();

	/**
	 * Atoms
	 */
	const [isInserterOpened, setIsInserterOpened] = useAtom(isInserterOpenedAtom);
	const [isInspectorOpened, setIsInspectorOpened] = useAtom(
		isInspectorOpenedAtom
	);

	/**
	 * Functions
	 */
	const onClickInserter = useCallback(() => {
		if (isInserterOpened) {
			// Focusing the inserter button should close the inserter popover.
			// However, there are some cases it won't close when the focus is lost.
			// See https://github.com/WordPress/gutenberg/issues/43090 for more details.
			inserterButton.current.focus();
			setIsInserterOpened(false);
		} else {
			setIsInserterOpened(true);
		}
	}, [isInserterOpened, setIsInserterOpened]);

	const toggleInspector = () => {
		setIsInspectorOpened(!isInspectorOpened);
	};

	const backToPosts = () => {
		navigate("/posts");
	};

	const clickViewPost = () => {
		navigate("/posts/mxmtjq4");
	};

	return (
		<div className="edit-post-header gap-x-4 px-6">
			{/* Back to Posts*/}
			<Button variant="secondary" onClick={backToPosts}>
				&larr; Back To Posts
			</Button>

			{/* Inserter Toggle Button */}
			{/* https://github.com/WordPress/gutenberg/blob/702fd1b77504a7999c4f8bc0cd0abecfe99b0358/packages/edit-post/src/components/header/header-toolbar/index.js#L139 */}
			<Button
				ref={inserterButton}
				className="inserter-toggle-button"
				variant="primary"
				icon={plus}
				onClick={onClickInserter}
				isPressed={isInserterOpened}
				onMouseDown={(e) => e.preventDefault()}
			/>

			{/* Dummy div */}
			<div className="ml-auto"></div>

			{/* View Post */}
			<Button variant="secondary" onClick={clickViewPost}>
				View Post
			</Button>

			{/* Inspector Toggle Button */}
			<Button variant="primary" icon={alignRight} onClick={toggleInspector} />
		</div>
	);
}
