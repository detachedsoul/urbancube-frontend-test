import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "UrbanCube — Simple, Secure & Instant Digital Payments",
	description:
		"UrbanCube makes everyday payments simple, secure, and instant — from airtime top-ups to international subscriptions and more.",
	keywords: [
		"UrbanCube",
		"digital payments",
		"airtime top up",
		"airtime recharge",
		"international subscriptions",
		"online payments",
		"secure payments",
		"instant payments",
	],
	openGraph: {
		title: "UrbanCube — Simple, Secure & Instant Digital Payments",
		description:
			"UrbanCube makes everyday payments simple, secure, and instant — from airtime top-ups to international subscriptions and more.",
		type: "website",
		siteName: "UrbanCube",
	},
	twitter: {
		card: "summary_large_image",
		title: "UrbanCube — Simple, Secure & Instant Digital Payments",
		description:
			"UrbanCube makes everyday payments simple, secure, and instant — from airtime top-ups to international subscriptions and more.",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${inter.variable} h-full leading-normal antialiased selection:bg-brand-purple selection:text-white wrap-break-word [word-break:break-word] [word-wrap:break-word]`}
		>
			<body>
				<Header />

				{children}

				<Footer />
			</body>
		</html>
	);
}
