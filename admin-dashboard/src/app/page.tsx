import NewSignUps from "@/components/new-sign-ups-table";
import StatsCards from "@/components/stats-cards";
import TransactionVolume from "@/components/transaction-volume";

const Index = () => {
    return (
		<main className="space-y-6 section-padding py-5">
			{/* <StatsCards />

			<TransactionVolume /> */}

            <div className="grid gap-6 md:grid-cols-2">
                <NewSignUps />
            </div>
		</main>
	);
};

export default Index;
