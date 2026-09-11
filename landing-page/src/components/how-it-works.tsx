import Image from "next/image";
import Link from "next/link";
import AppStoreIcon from "@/assets/appstore-icon.png";
import PlayStoreIcon from "@/assets/playstore-icon.png";
import UrbanCubeAppMockUp from "@/assets/urbancube-app-mockup.png";

const usageSteps = [
	{
		header: "Create an account",
		description:
			"Sign up in minutes with your basic details and get your UrbanCube wallet ready to use.",
	},
	{
		header: "Fund your wallet",
		description:
			"Add money via bank transfer, card, or UrbanCube-to-UrbanCube.",
	},
	{
		header: "Spend Anywhere",
		description:
			"Use your NGN or USD virtual cards for shopping, bills, or subscriptions.",
	},
];

const HowItWorks = () => {
	return (
		<section className="space-y-9 pt-24 section-padding">
			<div className="space-y-5">
				<div className="text-center w-auto mx-auto grid place-content-center">
					<p className="font-semibold text-[#3f3f46] text-sm/4.5 border border-[#d1d1d6] rounded-full py-2 px-3 text-center">
						How it Works
					</p>
				</div>

				<h2 className="text-center font-semibold text-[1.75rem]/8 tracking-[-0.031rem] text-[#0f0f10] md:text-[2.75rem]/13 md:tracking-[-0.125rem]">
					Simple. Smart. Seamless.
				</h2>

				<p className="text-center text-brand-neutral font-medium md:text-lg/8 md:w-3/5 mx-auto">
					Whether you’re paying bills in Naira or shopping globally in
					Dollars, everything happens instantly, securely, and without
					the usual banking stress.
				</p>

				<div className="flex items-center place-content-center gap-3">
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

			<div className="grid md:flex gap-10 md:gap-16 md:items-center md:mx-auto lg:w-3/4">
				<Image
					className="w-3/4 md:w-2/5 max-md:mx-auto"
					src={UrbanCubeAppMockUp}
					alt="UrbanCube App Dashboard"
					quality={100}
				/>

				<div className="space-y-1 md:w-2/5">
					{usageSteps.map((step, index) => (
						<div
							className="grid grid-cols-[24px_1fr] gap-5 items-center"
							key={step.header}
						>
							<div className="h-full flex flex-col items-center gap-1">
								<svg
									className="shrink-0"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 21.5999C14.5461 21.5999 16.9879 20.5885 18.7882 18.7881C20.5886 16.9878 21.6 14.546 21.6 11.9999C21.6 9.45382 20.5886 7.01203 18.7882 5.21168C16.9879 3.41133 14.5461 2.3999 12 2.3999C9.45395 2.3999 7.01215 3.41133 5.2118 5.21168C3.41145 7.01203 2.40002 9.45382 2.40002 11.9999C2.40002 14.546 3.41145 16.9878 5.2118 18.7881C7.01215 20.5885 9.45395 21.5999 12 21.5999ZM16.6284 9.8291C16.6979 9.73345 16.7479 9.62504 16.7755 9.51007C16.8031 9.3951 16.8078 9.27583 16.7893 9.15905C16.7708 9.04227 16.7295 8.93028 16.6677 8.82946C16.6059 8.72865 16.5249 8.641 16.4292 8.5715C16.3336 8.50201 16.2252 8.45203 16.1102 8.42443C15.9952 8.39683 15.8759 8.39215 15.7592 8.41065C15.6424 8.42914 15.5304 8.47046 15.4296 8.53224C15.3288 8.59402 15.2411 8.67505 15.1716 8.7707L10.992 14.5187L8.73602 12.2627C8.65296 12.1768 8.55362 12.1083 8.44379 12.0612C8.33397 12.014 8.21586 11.9893 8.09636 11.9883C7.97686 11.9873 7.85836 12.0101 7.74777 12.0554C7.63719 12.1007 7.53673 12.1676 7.45227 12.2522C7.3678 12.3367 7.30102 12.4372 7.25582 12.5478C7.21062 12.6585 7.18791 12.777 7.189 12.8965C7.1901 13.016 7.21498 13.1341 7.2622 13.2439C7.30942 13.3536 7.37803 13.4529 7.46402 13.5359L10.464 16.5359C10.556 16.6279 10.6668 16.6989 10.7888 16.744C10.9108 16.789 11.0412 16.8071 11.1708 16.7969C11.3005 16.7868 11.4265 16.7487 11.54 16.6852C11.6535 16.6216 11.7519 16.5343 11.8284 16.4291L16.6284 9.8291Z"
										fill="#4f16bf"
									/>
								</svg>

								<div className="flex-1 w-0.5 bg-[repeating-linear-gradient(to_bottom,#4F16BF_0_4px,transparent_4px_8px)]" />

								{index === usageSteps.length - 1 && (
									<div className="size-3 rounded-full border border-brand-purple" />
								)}
							</div>

							<div className="space-y-1.5 py-6">
								<h3 className="text-brand-neutral-black font-semibold text-lg/6 md:text-xl/6">
									{step.header}
								</h3>

								<p className="font-medium text-brand-neutral max-md:text-sm/6 md:leading-7">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
