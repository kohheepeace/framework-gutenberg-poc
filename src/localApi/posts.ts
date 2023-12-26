import localforage from "localforage";
import { Post } from "../types/posts";

export async function getPosts(): Promise<Post[]> {
	const response = await fetch("http://localhost:3001/posts");
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const posts = await response.json();
	return posts;
}

export async function createPost(post: Post): Promise<Response> {
	const response = await fetch("http://localhost:3001/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const newPost = await response.json();

	return newPost;
}

export async function getPost(id: string): Promise<Post | null> {
	const response = await fetch(`http://localhost:3001/posts/${id}`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const post = await response.json();
	return post;
}

export async function updatePost(id: string, updatedPost: Post): Promise<any> {
	const response = await fetch(`http://localhost:3001/posts/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedPost),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const post = await response.json();
	return post;
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
