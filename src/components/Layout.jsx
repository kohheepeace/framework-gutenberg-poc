import React from "react";

import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<>
			{/* Header */}
			<Header />

			{/* Main Content */}
			<main className="mx-auto max-w-7xl px-6 lg:px-8">{children}</main>
		</>
	);
};

export default Layout;
