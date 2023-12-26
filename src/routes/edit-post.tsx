/**
 * External dependencies
 */
import { DevTools } from "jotai-devtools";
import { Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { useLoaderData } from "react-router-dom";

/**
 * Internal dependencies
 */
import Editor from "../components/edit-post/Editor";

// import { createPost } from "../localApi/posts";
import "./edit-post.scss";
import { postAtom } from "../components/edit-post/atoms";

// Register the default core block types.

export default function EditPost() {
	const post = useLoaderData();

	const HydrateAtoms = ({ initialValues, children }) => {
		// initialising on state with prop on render here
		useHydrateAtoms(initialValues);
		return children;
	};

	const initialValues = [[postAtom, post]];

	return (
		<Provider>
			<HydrateAtoms initialValues={initialValues}>
				<Editor />
				<DevTools />
			</HydrateAtoms>
		</Provider>
	);
}
