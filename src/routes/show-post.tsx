import { useLoaderData, redirect } from "react-router-dom";

import { getPost } from "../localApi/posts";
import Layout from "../components/show-post/Layout";
import blockRender from "../gutenberg/blockRender";

export default function ShowPost() {
	const { title, content } = useLoaderData();
	return (
		<Layout>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</Layout>
	);
}

export async function postLoader({ params }: { params: any }) {
	const post = await getPost(params.postId);
	if (!post) throw new Response("", { status: 404 });
	const { content, ...rest } = post;
	const newContent = blockRender(content || "");

	return { ...rest, content };
}
