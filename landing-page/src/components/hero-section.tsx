"use client";

import Image from "next/image";
import HeroImage from "@/assets/hero-image.png";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { cn } from "cn";

const HeroSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [shouldRenderModal, setShouldRenderModal] = useState(false);

	const openModal = () => {
		setShouldRenderModal(true);

		requestAnimationFrame(() => {
			setIsModalOpen(true);
		});
	};

	const closeModal = () => {
		setIsModalOpen(false);

		setTimeout(() => {
			setShouldRenderModal(false);
		}, 300);
	};

	useEffect(() => {
		if (!isModalOpen) return;

		const originalOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isModalOpen]);

	useEffect(() => {
		if (!isModalOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isModalOpen]);

	return (
		<section className="grid lg:grid-cols-2 lg:items-center pt-12 relative lg:gap-8 lg:pt-0">
			<div className="space-y-5 section-padding md:pr-0 lg:pr-0 2xl:pr-0 md:-mb-12 lg:mb-0">
				<h1 className="text-white font-semibold text-[1.75rem]/8 md:text-7xl/20">
					Pay, Convert, and Spend —{" "}
					<span className="text-brand-gold">Effortlessly.</span>
				</h1>

				<p className="text-base/7 md:text-lg/8 font-medium text-[#d1d1d6]">
					Whether it’s your daily airtime top-up or that international
					subscription, UrbanCube makes every transaction simple,
					secure, and instant.
				</p>

				<div className="flex items-center flex-wrap gap-3">
					<Link
						className="auth-button max-md:py-2.5 bg-brand-purple text-white hover:bg-brand-purple/90 border-brand-purple/30 hover:outline-brand-purple/60"
						href="/auth/register"
					>
						Create an Account
					</Link>

					<button
						className="auth-button max-md:py-2.5 hover:outline-[#d1d1d6]/60 md:hover:outline-[#d1d1d633]/60 bg-brand-gray text-white hover:bg-brand-gray/90 border-[#d1d1d633] flex items-center gap-2"
						type="button"
						onClick={openModal}
					>
						<svg
							width="36"
							height="16"
							viewBox="0 0 36 16"
							fill="none"
						>
							<path
								d="M11.8579 8.50875C11.8738 7.27362 12.5362 6.10492 13.5871 5.45799C12.9242 4.50992 11.8138 3.90882 10.6585 3.87262C9.42631 3.74311 8.23176 4.61093 7.60386 4.61093C6.9638 4.61093 5.99705 3.88548 4.95602 3.90693C3.59908 3.95083 2.33407 4.72334 1.6739 5.91125C0.254771 8.37152 1.31331 11.9873 2.67271 13.976C3.35285 14.9498 4.14774 16.0376 5.18783 15.999C6.20562 15.9567 6.58575 15.3491 7.81431 15.3491C9.03147 15.3491 9.38811 15.999 10.4493 15.9745C11.5414 15.9567 12.2295 14.9963 12.8858 14.0133C13.3745 13.3194 13.7505 12.5526 14 11.7411C12.7165 11.1975 11.8594 9.90415 11.8579 8.50875Z"
								fill="#D1D1D6"
							/>
							<path
								d="M9.8535 2.56476C10.449 1.84895 10.7423 0.928903 10.6713 0C9.76154 0.0956804 8.92118 0.531067 8.31766 1.21941C7.72749 1.89196 7.42036 2.79581 7.47843 3.68921C8.38852 3.6986 9.28321 3.27501 9.8535 2.56476Z"
								fill="#D1D1D6"
							/>
							<path
								d="M21.5 1.85908V14.1403C21.5001 14.167 21.508 14.193 21.5228 14.2151C21.5377 14.2373 21.5587 14.2546 21.5833 14.2648C21.6079 14.2751 21.635 14.2778 21.6611 14.2727C21.6873 14.2677 21.7113 14.255 21.7303 14.2363L28.125 8.00001L21.7303 1.76314C21.7113 1.74443 21.6873 1.73174 21.6611 1.72666C21.635 1.72158 21.6079 1.72434 21.5833 1.73459C21.5587 1.74483 21.5377 1.76211 21.5228 1.78426C21.508 1.8064 21.5001 1.83243 21.5 1.85908Z"
								fill="#D1D1D6"
							/>
							<path
								d="M30.8062 5.43747L22.7881 1.01997L22.7831 1.01716C22.645 0.942159 22.5137 1.12903 22.6269 1.23778L28.9122 7.24778L30.8062 5.43747Z"
								fill="#D1D1D6"
							/>
							<path
								d="M22.6275 14.7622C22.5137 14.871 22.645 15.0578 22.7837 14.9828L22.7887 14.98L30.8062 10.5625L28.9122 8.75159L22.6275 14.7622Z"
								fill="#D1D1D6"
							/>
							<path
								d="M34.0431 7.21872L31.8041 5.9856L29.6987 7.99997L31.8041 10.0134L34.0431 8.78122C34.6522 8.44466 34.6522 7.55528 34.0431 7.21872Z"
								fill="#D1D1D6"
							/>
						</svg>
						Download App
					</button>
				</div>
			</div>

			<div className="relative size-full">
				<Image
					className="size-full"
					src={HeroImage}
					alt="Pay, convert and spend on UrbanCube"
                    priority
				/>

				<div className="absolute inset-x-0 bottom-0 h-1/3 [background:linear-gradient(180deg,rgba(15,15,16,0)_5.52%,#0F0F10_92.64%)] pointer-events-none" />
			</div>

			{shouldRenderModal && (
				<div
					className={cn(
						"fixed transition-all duration-300 ease-in-out inset-0 z-9999 grid place-items-center",
						{
							"bg-black/60 backdrop-blur-sm": isModalOpen,
							"bg-black/0 backdrop-blur-0 pointer-events-none":
								!isModalOpen,
						},
					)}
					aria-hidden={!isModalOpen}
				>
					<div
						className={cn(
							"max-w-lg overflow-hidden bg-white rounded-[1.25rem] w-[90%] md:w-3/5 lg:w-2/5 transition-all duration-300 ease-in-out overflow-y-auto hide-scrollbar max-h-[90dvh]",
							{
								"translate-y-0 scale-100 opacity-100":
									isModalOpen,
								"translate-y-4 scale-95 opacity-0":
									!isModalOpen,
							},
						)}
						role="dialog"
						aria-modal="true"
						aria-labelledby="download-modal-title"
					>
						<div className="flex items-center justify-between gap-4 border-b border-[#e5e9f2] p-5 sticky top-0 bg-white">
							<p className="font-medium">Scan QR Code</p>

							<button
								className="hover:bg-brand-gray-dark rounded-xl p-2"
								type="button"
								aria-label="Close modal"
								onClick={closeModal}
							>
								<XIcon
									color="#6e717c"
									strokeWidth={1.5}
								/>
							</button>
						</div>

						<div className="border-b border-[#e5e9f2] p-5 space-y-3">
							<p className="text-brand-neutral leading-7 font-medium">
								The QR code would redirect you to either Apple
								store or Google playstore to download
								application.
							</p>

							<div className="border-[0.031rem] border-[#0000000d] [box-shadow:0px_4px_6px_-2px_#83838308,0px_12px_16px_-4px_#ededed14] rounded-xl grid place-content-center p-2">
								<QRCodeSVG
									value="https://github.com/detachedsoul"
									size={250}
								/>
							</div>
						</div>

						<div className="p-5 sticky bottom-0 bg-white">
							<button
								className="bg-brand-purple text-white block w-full py-3 px-2 rounded-xl [box-shadow:inset_0px_2px_0px_0px_#ffffff33,0px_2px_8px_0px_#0000000d]"
								type="button"
								onClick={closeModal}
							>
								Dismiss
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default HeroSection;
