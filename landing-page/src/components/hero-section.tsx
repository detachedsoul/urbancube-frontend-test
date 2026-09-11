import Image from "next/image";
import HeroImage from "@/assets/hero-image.png";

const HeroSection = () => {
	return (
		<section className="bg-gray-900 grid gap-8 md:grid-cols-2 md:items-center pt-12 px-4 md:px-10 lg:px-20 2xl:px-40">
			<div className="space-y-5">
				<h1 className="text-white font-semibold text-[1.75rem]/8 md:text-7xl/20">
					Pay, Convert, and Spend —{" "}
					<span className="text-brand-gold">Effortlessly.</span>
				</h1>

				<p className="text-base/7 md:text-lg/8 font-medium text-[#d1d1d6]">
					Whether it’s your daily airtime top-up or that international
					subscription, UrbanCube makes every transaction simple,
					secure, and instant.
				</p>
			</div>

			<div className="bg-red-500 relative w-full h-100">
				<Image
					className="size-full object-cover"
					src={HeroImage}
					alt="Pay, convert and spend on UrbanCube"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
