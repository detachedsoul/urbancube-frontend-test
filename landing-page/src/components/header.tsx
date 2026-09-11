"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar";
import AuthButtons from "./auth-buttons";
import Logo from "@/assets/logo.png";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-9999 flex items-center justify-between gap-4 bg-gray-900 p-4 md:px-10 lg:px-20 2xl:px-40">
			<Link className="shrink-0" href="/">
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
