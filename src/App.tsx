import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Posts, { postsLoader } from "./routes/posts";
import NewPost from "./routes/new-post";
import ShowPost, { postLoader } from "./routes/show-post";
import EditPost from "./routes/edit-post";

let router = createBrowserRouter([
	{
		path: "/",
		element: <Posts />,
		loader: postsLoader,
	},
	{
		path: "/posts",
		element: <Posts />,
		loader: postsLoader,
	},
	{
		path: "/posts/new",
		element: <NewPost />,
	},
	{
		path: "posts/:postId",
		element: <ShowPost />,
		loader: postLoader,
	},
	{
		path: "posts/:postId/edit",
		element: <EditPost />,
		loader: postLoader,
	},
]);

if (import.meta.hot) {
	import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
	return <RouterProvider router={router} />;
}
