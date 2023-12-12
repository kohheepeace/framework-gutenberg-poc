import { Link } from "react-router-dom";

export default function Header() {
	const navigation = [
		{ name: "Posts", href: "/posts" },
		{ name: "New Post", href: "/posts/new" },
		{ name: "Patterns", href: "/patterns" },
		{ name: "Global Settings", href: "/global-settings" },
	];
	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5 inline-flex items-center">
						<span className="font-bold">Logo</span>
					</a>
				</div>

				{/* Navbar items */}
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
