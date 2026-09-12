import Image from "next/image";
import Link from "next/link";
import AppStoreIcon from "@/assets/appstore-icon.png";
import PlayStoreIcon from "@/assets/playstore-icon.png";
import Mockup from "@/assets/footer-mockup.png";

const Footer = () => {
	return (
		<footer className="section-padding py-16">
			<div className="bg-brand-purple p-4 rounded-[1.25rem] md:rounded-[2.25rem] grid gap-2.5 md:p-0 lg:grid-cols-2 lg:items-center">
				<div className="space-y-5 md:p-8">
					<h2 className="font-semibold text-[1.75rem]/8 tracking-[-0.031rem] text-white md:text-[2.5rem]/13 md:tracking-[-0.094rem]">
						Simplify your digital life with UrbanCube
					</h2>

					<p className="text-[#e4e4e7] font-medium md:text-lg/8">
						Join the UrbanCube community and take full control of
						your local and global transactions.
					</p>

					<div className="flex items-center gap-3">
						<Link href="/">
							<Image
								className="w-33 h-11"
								src={AppStoreIcon}
								alt="Download on AppStore"
								width={100}
								height={50}
								quality={100}
							/>
						</Link>

						<Link href="/">
							<Image
								className="w-33 h-11"
								src={PlayStoreIcon}
								alt="Download on PlayStore"
								width={100}
								height={50}
								quality={100}
							/>
						</Link>
					</div>
				</div>

				<div className="max-md:hidden h-full grid place-content-end">
					<Image
						className="size-full"
						src={Mockup}
						alt="Website Mockup"
						quality={100}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
