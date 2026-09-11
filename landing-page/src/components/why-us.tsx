import Image from "next/image";
import DualWallets from "@/assets/dual-wallets.png";
import BudgetWallets from "@/assets/budget-wallets.png";
import AirtimeToCash from "@/assets/airtime-to-cash.png";
import RewardsCashback from "@/assets/rewards-cashback.png";
import { cn } from "cn";

const sections = [
	{
		image: DualWallets,
		header: "Dual Wallets",
		description:
			"Fund your NGN wallet via bank transfer, card, or UrbanCube-to-UrbanCube, and convert to USD instantly when you need to pay for Netflix, Amazon, or other global platforms.",
		imageClass: "size-full aspect-sqaure",
		hasContainer: false,
		imagePosition: "center",
	},
	{
		image: BudgetWallets,
		header: "Budget Wallets",
		description:
			"Turn your financial goals into reality with mini-wallets for rent, savings, transport, or personal projects.",
		imageClass: "w-4/5 mx-auto aspect-sqaure",
		hasContainer: true,
		imagePosition: "center",
	},
	{
		image: AirtimeToCash,
		header: "Airtime-to-Cash",
		description:
			"Got unused airtime? Convert it back into wallet funds in seconds. Withdraw to your bank or reuse within UrbanCube — because your money should always stay useful.",
		imageClass: "w-[70%] mx-auto aspect-sqaure",
		hasContainer: true,
		imagePosition: "center",
	},
	{
		image: RewardsCashback,
		header: "Rewards & Cashback",
		description:
			"Every payment, top-up, or referral comes with benefits. Enjoy cashback on airtime and bills, earn loyalty points for consistency, and get rewarded when you invite friends to join the UrbanCube community.",
		imageClass: "w-3/4 mx-auto aspect-sqaure",
		hasContainer: true,
		imagePosition: "end",
	},
];

const WhyUs = () => {
	return (
		<section className="space-y-9 pt-24 px-4 md:px-10 lg:px-20 2xl:px-40">
			<div className="space-y-5">
				<div className="text-center w-auto mx-auto grid place-content-center">
					<p className="font-semibold text-[#3f3f46] text-sm/4.5 border border-[#d1d1d6] rounded-full py-2 px-3 text-center">
						Why UrbanCube
					</p>
				</div>

				<h2 className="text-center font-semibold text-[1.75rem]/8 tracking-[-0.031rem] text-[#0f0f10] md:text-[2.75rem]/13 md:tracking-[-0.125rem]">
					Your Money, Simplified.
				</h2>

				<p className="text-center text-brand-neutral font-medium md:text-lg/8 md:w-3/5 mx-auto">
					From daily payments to cross-border spending, UrbanCube
					gives you total control of your finances — all in one secure
					app.
				</p>
			</div>

			<div className="grid gap-5 items-stretch md:gap-6 md:grid-cols-2">
				{sections.map((section, index) => (
					<div
						className="space-y-3"
						key={section.header}
					>
						<div className="border-[0.031rem] border-[#0000000d] bg-brand-gray-dark rounded-[1.25rem] h-50 lg:h-70">
							{section.hasContainer && (
								<div
									className={cn(
                                        "grid place-content-center size-full", {
                                            "place-content-end": section.imagePosition === "end"
                                        }
									)}
								>
									<Image
										className={section.imageClass}
										src={section.image}
										alt={section.header}
										quality={100}
									/>
								</div>
							)}

							{!section.hasContainer && (
								<Image
									className={section.imageClass}
									src={section.image}
									alt={section.header}
									quality={100}
								/>
							)}
						</div>

						<div className="space-y-1.5">
							<h3 className="text-brand-neutral-black font-semibold text-lg/6 md:text-xl/6">
								{section.header}
							</h3>

							<p className="font-medium text-brand-neutral max-md:text-sm/6 md:leading-7">
								{section.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyUs;
