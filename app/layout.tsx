import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://devdee.vercel.app/"),

	title: "Social Scribe",
	authors: {
		name: "Deepak",
	},

	description: "Craft viral content in a click",
	openGraph: {
		title: "Social Scribe",
		description: "AI-powered social brilliance",
		url: "https://devdee.vercel.app/",
		siteName: "Social Scribe",
		images: "/og.png",
		type: "website",
	},
	keywords: [
		"Social Scribe",
		"AI content generator",
		"Smart content generator",
		"Intelligent content suggestions",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<html lang="en" suppressContentEditableWarning>
					<body className={space_Grotesk.className}>
						<ThemeProvider
							attribute="class"
							defaultTheme="dark"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</body>
				</html>
			</html>
		</ClerkProvider>
	);
}
