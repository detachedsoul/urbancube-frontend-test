import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";

const Index = () => {
    return (
		<>
			<HeroSection />

			<WhyUs />

            <HowItWorks />

			<Features />
		</>
	);
};

export default Index;
