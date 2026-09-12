import StatsCards from "@/components/stats-cards";
import TransactionVolume from "@/components/transaction-volume";

const Index = () => {
    return (
		<main className="space-y-6 section-padding py-5">
			<StatsCards />

			<TransactionVolume />
		</main>
	);
};

export default Index;
