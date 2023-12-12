import localforage from "localforage";
import { Post } from "../types/posts";

export async function getPosts(): Promise<Post[]> {
	let posts = await localforage.getItem<Post[]>("posts");
	if (!posts) posts = [];
	return posts;
}

export async function createPost({
	title,
	content,
	postType = "post",
}: Partial<Post>): Promise<Post> {
	let id = Math.random().toString(36).substring(2, 9);
	let post: Post = { id, title, content, postType };
	let posts = await getPosts();
	posts.unshift(post);
	await set(posts);
	return post;
}

export async function getPost(id: string): Promise<Post | null> {
	let posts = await localforage.getItem<Post[]>("posts");
	if (posts) {
		let post = posts.find((post) => post.id === id);
		return post ?? null;
	}
	return null;
}

export async function deletePost(id: string): Promise<boolean> {
	let posts = await localforage.getItem<Post[]>("posts");
	if (posts) {
		let index = posts.findIndex((post) => post.id === id);
		if (index > -1) {
			posts.splice(index, 1);
			await set(posts);
			return true;
		}
	}
	return false;
}

async function set(posts: Post[]): Promise<void> {
	await localforage.setItem("posts", posts);
}
