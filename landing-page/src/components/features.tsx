const featuresCards = [
	{
		name: "Budget Wallets",
		description:
			"Create mini-wallets for rent, savings, or transport — and track progress automatically.",
		icon: (
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
			>
				<rect
					width="48"
					height="48"
					rx="24"
					fill="#DEDEFF"
				/>
				<path
					d="M31 15H17C15.8954 15 15 15.8954 15 17V31C15 32.1046 15.8954 33 17 33H31C32.1046 33 33 32.1046 33 31V17C33 15.8954 32.1046 15 31 15Z"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 21C15 20.4696 15.2107 19.9609 15.5858 19.5858C15.9609 19.2107 16.4696 19 17 19H31C31.5304 19 32.0391 19.2107 32.4142 19.5858C32.7893 19.9609 33 20.4696 33 21"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 23H18C18.8 23 19.6 23.3 20.1 23.9L21.2 24.8C22.8 26.4 25.3 26.4 26.9 24.8L28 23.9C28.5 23.4 29.3 23 30.1 23H33"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Airtime2Cash",
		description: "Turn unused airtime into real wallet funds instantly.",
		icon: (
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
			>
				<rect
					width="48"
					height="48"
					rx="24"
					fill="#DEDEFF"
				/>
				<path
					d="M20 26C23.3137 26 26 23.3137 26 20C26 16.6863 23.3137 14 20 14C16.6863 14 14 16.6863 14 20C14 23.3137 16.6863 26 20 26Z"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M30.09 22.3701C31.0353 22.7225 31.8765 23.3076 32.5358 24.0713C33.195 24.835 33.6511 25.7526 33.8618 26.7392C34.0724 27.7258 34.0309 28.7496 33.7411 29.716C33.4512 30.6823 32.9224 31.5599 32.2035 32.2677C31.4845 32.9755 30.5987 33.4906 29.628 33.7653C28.6573 34.0401 27.6329 34.0656 26.6497 33.8396C25.6665 33.6135 24.7561 33.1432 24.0029 32.4721C23.2496 31.801 22.6777 30.9508 22.34 30.0001"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19 18H20V22"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M28.71 25.8799L29.41 26.5899L26.59 29.4099"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Smart Insights",
		description:
			"See how you spend, save, and earn with personalized reports and AI-driven tips.",
		icon: (
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
			>
				<rect
					width="48"
					height="48"
					rx="24"
					fill="#DEDEFF"
				/>
				<path
					d="M15 15V31C15 31.5304 15.2107 32.0391 15.5858 32.4142C15.9609 32.7893 16.4696 33 17 33H33"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M27 25H20C19.4477 25 19 25.4477 19 26V28C19 28.5523 19.4477 29 20 29H27C27.5523 29 28 28.5523 28 28V26C28 25.4477 27.5523 25 27 25Z"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M30 17H20C19.4477 17 19 17.4477 19 18V20C19 20.5523 19.4477 21 20 21H30C30.5523 21 31 20.5523 31 20V18C31 17.4477 30.5523 17 30 17Z"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "SubSplit",
		description: "Share subscriptions. Split payments. Stay connected.",
		icon: (
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
			>
				<rect
					width="48"
					height="48"
					rx="24"
					fill="#DEDEFF"
				/>
				<path
					d="M20 31H17C16 31 15 30 15 29V19C15 18 16 17 17 17H20"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M28 17H31C32 17 33 18 33 19V29C33 30 32 31 31 31H28"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M24 16V32"
					stroke="#4F16BF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];

const Features = () => {
	return (
		<section className="section-padding bg-[url('/feature-background-mobile.webp')] md:bg-[url('/feature-background.webp')] bg-no-repeat bg-cover bg-bottom-right grid gap-8 py-16 md:py-24 items-start lg:grid-cols-2 md:gap-8">
			<div className="space-y-5">
				<div className="text-center w-auto max-lg:mx-auto max-lg:grid max-lg:place-content-center lg:inline-block">
					<p className="font-semibold text-[#d1d1d6] text-sm/4.5 border border-[#3f3f46] rounded-full py-2 px-3 text-center">
						Spotlight Features
					</p>
				</div>

				<h2 className="max-lg:text-center font-semibold text-[1.75rem]/8 tracking-[-0.031rem] text-white md:text-[2.75rem]/13 md:tracking-[-0.125rem]">
					More Than Just a Wallet
				</h2>

				<p className="max-lg:text-center text-[#d1d1d6] font-medium md:text-lg/8">
					From daily payments to cross-border spending, UrbanCube
					gives you total control of your finances — all in one secure
					app.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-2">
				{featuresCards.map((feature) => (
					<div
						className="pt-4 px-4 pb-6 rounded-3xl border border-[#ffffff26] bg-[#5a5a5a33] flex flex-col justify-between gap-5 md:gap-[3.438rem]"
						key={feature.name}
					>
						{feature.icon}

						<div className="space-y-2">
							<h3 className="text-[#f4f4f5] font-semibold text-lg/6 tracking-[-0.031rem]">
								{feature.name}
							</h3>

							<p className="text-sm/5 text-[#d1d1d6]">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
