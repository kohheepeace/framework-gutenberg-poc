/**
 * External dependencies
 */
import { DevTools } from "jotai-devtools";
import { Provider } from "jotai";
import { useLoaderData } from "react-router-dom";

/**
 * Wordpress dependencies
 */
import { registerCoreBlocks } from "@wordpress/block-library";

/**
 * Internal dependencies
 */
import Editor from "../components/edit-post/Editor";
// import { createPost } from "../localApi/posts";
import "./edit-post.scss";

// Register the default core block types.
registerCoreBlocks();

export default function EditPost() {
	const post = useLoaderData();

	return (
		<Provider>
			<Editor />
			<DevTools />
		</Provider>
	);
}
