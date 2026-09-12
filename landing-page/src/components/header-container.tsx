import Header from "./header";
import HeroSection from "./hero-section";
import { preload } from "react-dom";

const HeaderContainer = () => {
	preload("/hero-background.webp", {
		as: "image",
		type: "image/webp",
		fetchPriority: "high",
	});

	preload("/hero-background-mobile.webp", {
		as: "image",
		type: "image/webp",
		fetchPriority: "high",
	});

	return (
		<div className="bg-[url('/hero-background-mobile.webp')] md:bg-[url('/hero-background.webp')] bg-no-repeat bg-bottom-right bg-cover relative">
			<Header />

			<HeroSection />
		</div>
	);
};

export default HeaderContainer;
