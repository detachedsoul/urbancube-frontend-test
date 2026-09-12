"use client";

import TransactionChart from "./transaction-chart";
import { useState } from "react";
import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import { FilterOption, filterOptions } from "@/utils/stats-cards-data";
import { chartData } from "@/utils/chart-data";

const TransactionVolume = () => {
	const [filterOption, setFilterOption] = useState<FilterOption>("30_days");

	return (
		<section className="rounded-xl border border-[#e4e4e7]">
			<div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f4f4f5] px-4 py-4.5">
				<h3 className="text-sm/5 font-medium text-[#3f3f46]">
					Transaction Volume Trends
				</h3>

				<div className="flex flex-wrap items-center gap-1 rounded-lg bg-brand-neutral-100">
					{filterOptions.map((option) => (
						<button
							className={cn(
								"rounded-lg border border-transparent px-2.5 py-1.5 text-sm/5 font-medium text-brand-gray transition-colors duration-300 ease-in-out hover:border-[#e7e7e7] hover:bg-[#faf8f5] hover:text-brand-neutral-black",
								{
									"border-[#e7e7e7] bg-[#faf8f5] text-brand-neutral-black":
										filterOption === option.value,
									"flex items-center gap-1.5":
										option.value === "custom",
								},
							)}
							key={option.value}
							type="button"
							onClick={() => setFilterOption(option.value)}
						>
							{option.name}

							{option.value === "custom" && (
								<ChevronDownIcon
									size={16}
									strokeWidth={1.5}
								/>
							)}
						</button>
					))}
				</div>
			</div>

			<div className="px-4 pt-6 pb-4">
				<TransactionChart data={chartData[filterOption]} />
			</div>
		</section>
	);
};

export default TransactionVolume;
