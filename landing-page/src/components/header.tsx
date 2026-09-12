"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar";
import AuthButtons from "./auth-buttons";
import Logo from "@/assets/logo.png";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const originalOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isOpen]);

	return (
		<header className="flex items-center justify-between gap-4 py-4 section-padding md:pb-0">
			<Link
				className="shrink-0"
				href="/"
			>
				<Image
					className="w-28.5 h-7 aspect-video"
					src={Logo}
					alt="UrbanCube"
					width={113}
					height={28}
					quality={100}
				/>
			</Link>

			<NavBar
				isOpen={isOpen}
				closeMenu={() => setIsOpen(false)}
			/>

			<AuthButtons variant="desktop" />

			<button
				className="text-[#d1d1d6] p-1 md:hidden"
				type="button"
				aria-label="Toggle navigation"
				onClick={() => setIsOpen(!isOpen)}
			>
				<MenuIcon />
			</button>
		</header>
	);
};

export default Header;
