import Footer from "@/components/footer";
import HeaderContainer from "@/components/header-container";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";

const Index = () => {
	return (
		<>
			<main>
				<HeaderContainer />

				<WhyUs />

				<HowItWorks />

				<Features />
            </main>

			<Footer />
		</>
	);
};

export default Index;
