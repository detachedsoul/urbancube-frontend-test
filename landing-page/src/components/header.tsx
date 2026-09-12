"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar";
import AuthButtons from "./auth-buttons";
import Logo from "@/assets/logo.png";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "cn";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [isAccountOpen, setIsAccountOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const originalOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isOpen]);

	return (
		<header className="flex items-center justify-between gap-4 py-4 section-padding md:pb-0 relative">
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

			<div className="hidden md:block lg:hidden">
				<button
					className={cn(
						"bg-brand-gray text-white hover:bg-brand-gray/90 border-[#d1d1d633] auth-button hover:outline-[#d1d1d6]/60 leading-none font-medium",
						{
							"outline-[#d1d1d6]/60 bg-brand-gray/90":
								isAccountOpen,
							"": !isAccountOpen,
						},
					)}
					type="button"
					aria-expanded={isAccountOpen}
					aria-controls="mobile-account-actions"
					onClick={() => setIsAccountOpen((prev) => !prev)}
				>
					Account
				</button>

				{isAccountOpen && (
					<div
						className="absolute top-16 inset-x-0 w-auto lg:hidden z-50 right-10 left-auto"
						id="mobile-account-actions"
					>
						<AuthButtons variant="tablet" />
					</div>
				)}
			</div>

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
