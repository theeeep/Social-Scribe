import Header from "./_components/Header";

function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div>
				<Header />
				{children}
			</div>
		</div>
	);
}

export default layout;
