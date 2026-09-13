"use client";

import { useState } from "react";
import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import { FilterOption, stats, filterOptions } from "@/utils/stats-cards-data";

const StatsCards = () => {
	const [filterOption, setFilterOption] = useState<FilterOption>("30_days");

	const currentStats = stats[filterOption];

	const currentFilter = filterOptions.find(
		(option) => option.value === filterOption,
	);

	return (
		<section className="space-y-6">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="space-y-0.5">
					<h1 className="text-brand-neutral-black text-2xl/7 font-semibold">
						Welcome, David
					</h1>

					<p className="text-brand-gray text-sm/5 font-medium">
						Activate more accounts with us.
					</p>
				</div>

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

			<div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">
				{currentStats.map((stat) => (
					<div
						className="rounded-2xl border border-[#e4e4e7] p-4"
						key={stat.header}
					>
						<div className="border-b border-[#f4f4f5] pb-3">
							<h3 className="text-sm/5 font-medium text-[#3f3f46]">
								{stat.header}
							</h3>

							<p className="text-brand-neutral-black text-2xl/7 font-semibold">
								{stat.value}
							</p>
						</div>

						<p
							className={cn("pt-3 text-sm/5 font-semibold", {
								"text-[#d92c20]": !stat.isPositive,
								"text-[#039754]": stat.isPositive,
							})}
						>
							{stat.isPositive ? (
								<svg
                                    className="inline-block"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.22 11.7799C4.07955 11.6393 4.00066 11.4487 4.00066 11.2499C4.00066 11.0512 4.07955 10.8606 4.22 10.7199L9.44 5.49993L5.75 5.49993C5.55109 5.49993 5.36032 5.42091 5.21967 5.28026C5.07902 5.13961 5 4.94884 5 4.74993C5 4.55102 5.07902 4.36025 5.21967 4.2196C5.36032 4.07895 5.55109 3.99993 5.75 3.99993L11.25 3.99993C11.4489 3.99993 11.6397 4.07895 11.7803 4.2196C11.921 4.36025 12 4.55102 12 4.74993L12 10.2499C12 10.4488 11.921 10.6396 11.7803 10.7803C11.6397 10.9209 11.4489 10.9999 11.25 10.9999C11.0511 10.9999 10.8603 10.9209 10.7197 10.7803C10.579 10.6396 10.5 10.4488 10.5 10.2499L10.5 6.55993L5.28 11.7799C5.13937 11.9204 4.94875 11.9993 4.75 11.9993C4.55125 11.9993 4.36063 11.9204 4.22 11.7799Z"
										fill="#039754"
									/>
								</svg>
							) : (
								<svg
                                    className="inline-block"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.78 4.22007C11.9205 4.3607 11.9993 4.55132 11.9993 4.75007C11.9993 4.94882 11.9205 5.13945 11.78 5.28007L6.56 10.5001H10.25C10.4489 10.5001 10.6397 10.5791 10.7803 10.7197C10.921 10.8604 11 11.0512 11 11.2501C11 11.449 10.921 11.6398 10.7803 11.7804C10.6397 11.9211 10.4489 12.0001 10.25 12.0001H4.75C4.55109 12.0001 4.36032 11.9211 4.21967 11.7804C4.07902 11.6398 4 11.449 4 11.2501V5.75007C4 5.55116 4.07902 5.36039 4.21967 5.21974C4.36032 5.07909 4.55109 5.00007 4.75 5.00007C4.94891 5.00007 5.13968 5.07909 5.28033 5.21974C5.42098 5.36039 5.5 5.55116 5.5 5.75007V9.44007L10.72 4.22007C10.8606 4.07962 11.0512 4.00073 11.25 4.00073C11.4488 4.00073 11.6394 4.07962 11.78 4.22007Z"
										fill="#D92C20"
									/>
								</svg>
							)}{" "}
							{`${stat.isPositive ? "+" : "-"}${stat.differencePercentage}`}%{" "}
							<span className="font-normal text-[#3f3f46]">
								{currentFilter?.comparison}
							</span>
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default StatsCards;
