import { useLoaderData, Link, Outlet } from "react-router-dom";

import Layout from "../components/Layout";
import { getPosts } from "../localApi/posts";

export async function postsLoader() {
	return getPosts();
}

export default function Posts() {
	const posts = useLoaderData();

	return (
		<Layout>
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Posts
						</h2>
						<div className="mt-4 border-gray-200 pt-10 sm:mt-6 sm:pt-16">
							{posts.map((post) => (
								<article
									key={post.id}
									className="flex items-center justify-between py-4 border-b text-sm leading-6"
								>
									<div className="flex w-0 flex-1 items-center">
										<div className="flex min-w-0 flex-1 gap-2">
											<Link
												className="truncate font-medium hover:text-indigo-600"
												to={`/posts/${post.id}`}
											>
												{post.title}
											</Link>
										</div>
									</div>
									<div className="ml-4 flex-shrink-0">
										<Link
											className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
											to={`/posts/${post.id}/edit`}
										>
											Edit
										</Link>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
