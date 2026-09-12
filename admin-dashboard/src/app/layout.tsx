import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "UrbanCube - Admin Dashboard",
	description:
		"A centralized dashboard for managing UrbanCube, monitoring activity, and overseeing platform operations.",
	openGraph: {
		title: "UrbanCube - Admin Dashboard",
		description:
			"A centralized dashboard for managing UrbanCube, monitoring activity, and overseeing platform operations.",
		type: "website",
		siteName: "UrbanCube",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} h-full leading-normal antialiased selection:bg-brand-purple selection:text-white wrap-break-word [word-break:break-word] [word-wrap:break-word] font-geist`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
