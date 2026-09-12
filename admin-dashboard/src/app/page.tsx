import NewSignUps from "@/components/new-sign-ups-table";
import StatsCards from "@/components/stats-cards";
import SuccessRate from "@/components/success-rate";
import TransactionVolume from "@/components/transaction-volume";

const Index = () => {
    return (
		<main className="space-y-6 section-padding py-5">
			{/* <StatsCards />

			<TransactionVolume /> */}

            <div className="grid gap-6 md:grid-cols-2">
                <SuccessRate />

                <NewSignUps />
            </div>
		</main>
	);
};

export default Index;
