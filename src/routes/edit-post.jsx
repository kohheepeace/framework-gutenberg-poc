import React, { useState } from "react";
import { useLoaderData, redirect } from "react-router-dom";

import { createPost } from "../localApi/posts";

export default function EditPost() {
	const post = useLoaderData();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Submit form data
		console.log("Title:", title);
		console.log("Content:", content);

		// Create Post
		const newPost = await createPost({
			title,
			content,
		});

		redirect(`/posts/${newPost.id}`);
	};

	return (
		<div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
			<h1>EDIT post page</h1>
		</div>
	);
}
