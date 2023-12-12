import { useLoaderData, redirect } from "react-router-dom";

import { getPost } from "../localApi/posts";

export default function ShowPost() {
	const post = useLoaderData();
	return (
		<div>
			<h2>{post.title}</h2>
			<div>{post.content}</div>
		</div>
	);
}

export async function postLoader({ params }) {
	const post = await getPost(params.postId);
	if (!post) throw new Response("", { status: 404 });
	return post;
}
