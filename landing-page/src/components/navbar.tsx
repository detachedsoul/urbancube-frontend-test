import Image from "next/image";
import Link from "next/link";
import AuthButtons from "./auth-buttons";
import Logo from "@/assets/logo-colored.png";
import AppStoreIcon from "@/assets/appstore-icon.png";
import PlayStoreIcon from "@/assets/playstore-icon.png";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { cn } from "cn";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
	{
		name: "Home",
		hasChildren: false,
		href: "/",
		children: [],
	},
	{
		name: "Services",
		hasChildren: true,
		children: [
			{
				name: "Airtime & Data",
				description: "Top up Airtime & data in seconds with Urbancube",
				href: "/services/airtime-data",
				icon: "/icon-airtime-data.png",
			},
			{
				name: "Internet",
				description: "Fast internet, one tap away.",
				href: "/services/internet",
				icon: "/icon-internet.png",
			},
			{
				name: "TV",
				description: "Keep your entertainment uninterrupted.",
				href: "/services/tv",
				icon: "/icon-tv.png",
			},
			{
				name: "Electricity",
				description: "Never get caught in the dark again.",
				href: "/services/electricity",
				icon: "/icon-electricity.png",
			},
			{
				name: "Airtime2Cash",
				description: "Convert airtime to cash easily.",
				href: "/services/airtime2cash",
				icon: "/icon-airtime2cash.png",
			},
			{
				name: "SmartSplit",
				description: "Share Subscription cost smarter with SmartSplit.",
				href: "/services/smartsplit",
				icon: "/icon-smartsplit.png",
			},
		],
	},
	{
		name: "Company",
		hasChildren: true,
		children: [
			{
				name: "About Us",
				description: "Learn about our journey",
				href: "/company/about-us",
				icon: "/icon-about-us.png",
			},
			{
				name: "Contact Us",
				description: "Have a question or an issue?",
				href: "/company/contact-us",
				icon: "/icon-contact-us.png",
			},
			{
				name: "FAQ",
				description: "We’ve got answers to your questions.",
				href: "/company/faq",
				icon: "/icon-faq.png",
			},
		],
	},
	{
		name: "Resources",
		hasChildren: true,
		children: [
			{
				name: "Legal",
				description: "Learn about our policies",
				href: "/company/legal",
				icon: "/icon-legal.png",
			},
			{
				name: "Blog",
				description: "Get regular product and company updates",
				href: "/company/blog",
				icon: "/icon-blog.png",
			},
		],
	},
];

type NavBarProps = {
	isOpen: boolean;
	closeMenu: () => void;
};

const NavBar = ({ isOpen, closeMenu }: NavBarProps) => {
	const pathname = usePathname();

	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const toggleDropdown = (name: string) => {
		setActiveDropdown((current) => (current === name ? null : name));
	};

	const activeLink = navLinks.find((link) => link.name === activeDropdown);

	return (
		<nav
			className={cn(
				"bg-white text-brand-neutral-black px-4 transition-transform ease-in-out duration-300 max-md:flex max-md:flex-col max-md:gap-8 md:bg-brand-gray md:border md:border-brand-gray md:text-[#c4c4c4] font-medium md:rounded-full md:p-1 max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:h-dvh max-md:place-content-start max-md:overflow-y-auto z-50",
				{
					"max-md:translate-y-0": isOpen,
					"max-md:-translate-y-full": !isOpen,
				},
			)}
		>
			<div className="flex items-center justify-between sticky top-0 bg-white z-50 py-4 md:hidden">
				<Link href="/">
					<Image
						className="w-28.5 h-7 aspect-video"
						src={Logo}
						alt="UrbanCube"
						width={113}
						height={28}
						quality={100}
					/>
				</Link>

				<button
					className="bg-brand-gray-dark text-black rounded-xl p-2"
					type="button"
					aria-label="Toggle navigation"
					onClick={closeMenu}
				>
					<XIcon />
				</button>
			</div>

			<ul className="flex flex-col md:items-center md:flex-row gap-4 md:gap-1">
				{navLinks.map((link) => {
					const isActive = activeDropdown === link.name;

					return (
						<Fragment key={link.name}>
							<li className="text-xl md:text-sm">
								{link.href ? (
									<Link
										className={cn(
											"md:rounded-full block max-md:w-full font-semibold py-1.5 md:px-3 max-md:border-b max-md:border-[#f4f4f5] max-md:pb-6",
											{
												"text-brand-neutral md:text-[#c4c4c4]":
													activeLink ||
													pathname !== link.href,
												"bg-white md:text-[#3f3f46]":
													pathname === link.href &&
													!activeLink,
											},
										)}
										href={link.href}
									>
										{link.name}
									</Link>
								) : (
									<button
										className={cn(
											"md:rounded-full max-md:w-full py-1.5 md:px-3 flex items-center justify-between md:items-end gap-2 max-md:border-b max-md:border-[#f4f4f5] max-md:pb-6",
											{
												"md:bg-[#6d6d6d3b]": isActive,
												"hover:bg-[#6d6d6d3b] max-md:text-brand-neutral":
													!isActive,
												"text-brand-neutral-black md:text-[#c4c4c4]":
													pathname
														.toLowerCase()
														.startsWith(
															`/${link.name.toLowerCase()}`,
														),
											},
										)}
										type="button"
										aria-expanded={isActive}
										onClick={() =>
											toggleDropdown(link.name)
										}
									>
										{link.name}

										<ChevronDownIcon
											className={cn(
												"size-6 md:size-4 transition-transform duration-300",
												{ "rotate-180": isActive },
											)}
										/>
									</button>
								)}

								{activeLink === link && link.children && (
									<div
										className={cn(
											"grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:bg-white md:rounded-[1.25rem] md:p-3 md:absolute md:top-14 md:left-1/2 md:-translate-x-1/2 md:max-w-[50dvw] md:border md:border-[#e3e8ef33] md:max-h-[80dvh] md:overflow-hidden z-50",
											{
												"grid-rows-[1fr] opacity-100 mt-3.5":
													isActive,
												"grid-rows-[0fr] opacity-0 mt-0":
													!isActive,
											},
										)}
									>
										<ul className="min-h-0 overflow-hidden text-sm grid gap-4 hide-scrollbar md:overflow-y-auto md:grid-cols-2">
											{link.children.map((child) => (
												<li key={child.name}>
													<Link
														className="flex items-center gap-2 hover:bg-brand-gray-dark/50 transition-colors duration-300 ease-in-out rounded-xl p-2"
														href={child.href}
													>
														<Image
															className="shrink-0 size-10 md:size-14"
															src={child.icon}
															alt={child.name}
															width={400}
															height={400}
															quality={100}
														/>

														<div className="space-y-1">
															<span className="font-semibold text-brand-neutral-black">
																{child.name}
															</span>

															<p className="text-brand-neutral">
																{
																	child.description
																}
															</p>
														</div>
													</Link>
												</li>
											))}

											<div className="space-y-2 md:w-1/2 md:col-span-2 md:mx-auto">
												<h3 className="text-base text-brand-neutral-black font-semibold">
													Available on web and mobile
												</h3>

												<p className="text-brand-neutral font-normal">
													Register to use UrbanCube on
													web or click the links below
													to download the mobile
													application.
												</p>

												<div className="grid gap-3 grid-cols-2">
													<Link href="/">
														<Image
															className="w-full h-11"
															src={AppStoreIcon}
															alt="Download on AppStore"
															width={100}
															height={50}
															quality={100}
														/>
													</Link>

													<Link href="/">
														<Image
															className="w-full h-11"
															src={PlayStoreIcon}
															alt="Download on PlayStore"
															width={100}
															height={50}
															quality={100}
														/>
													</Link>
												</div>
											</div>
										</ul>
									</div>
								)}
							</li>
						</Fragment>
					);
				})}
			</ul>

			<AuthButtons variant="mobile" />
		</nav>
	);
};

export default NavBar;
