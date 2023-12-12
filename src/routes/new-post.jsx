import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createPost } from "../localApi/posts";

export default function NewPost() {
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

		// Clear form after submission
		// setTitle("");
		// setContent("");
	};

	return (
		<div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
			<form onSubmit={handleSubmit}>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							New Post
						</h2>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							{/* Title */}
							<div className="sm:col-span-4">
								<label
									htmlFor="title"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Title
								</label>
								<div className="mt-2">
									<input
										value={title}
										type="text"
										name="title"
										id="title"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder=""
										onChange={(event) => setTitle(event.target.value)}
									/>
								</div>
							</div>

							{/* Content */}
							<div className="col-span-full">
								<label
									htmlFor="content"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Content
								</label>
								<div className="mt-2">
									<textarea
										value={content}
										id="content"
										name="content"
										rows={3}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={(event) => setContent(event.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const note = await createNote({
//     title: formData.get("title"),
//     content: formData.get("content"),
//   });
//   return redirect(`/note/${note.id}`);
// }
