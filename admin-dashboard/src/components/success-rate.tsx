"use client";

import { PolarAngleAxis, RadialBar, RadialBarChart, Label } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const successRate = 50;

const chartData = [
	{ status: "success", value: successRate, fill: "var(--color-success)" },
];

const chartConfig = {
	success: { label: "Success", color: "#039754" },
} satisfies ChartConfig;

const SuccessRate = () => {
	return (
		<section className="rounded-xl border border-[#e4e4e7] flex h-full flex-col">
			<h3 className="text-sm/5 font-medium text-[#3f3f46] border-b border-[#f4f4f5] px-4 py-4.5">
				Bills Payment Success Rate
			</h3>

			<div className="grid gap-4 flex-1 items-center px-4 py-4.5 md:grid-cols-2 md:place-content-center mx-auto">
				<div className="size-full">
					<ChartContainer
						config={chartConfig}
						className="mx-auto aspect-square h-62.5"
					>
						<RadialBarChart
							data={chartData}
							innerRadius="70%"
							outerRadius="100%"
							startAngle={90}
							endAngle={-270}
						>
							<PolarAngleAxis
								type="number"
								domain={[0, 100]}
								tick={false}
								axisLine={false}
							/>

							<RadialBar
								dataKey="value"
								background={{ fill: "#e4e4e7" }}
								cornerRadius={successRate >= 100 ? 0 : 999}
								isAnimationActive={false}
							/>

							<Label
								content={({ viewBox }) => {
									if (
										viewBox &&
										"cx" in viewBox &&
										"cy" in viewBox
									) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy ?? 0) - 12}
													className="fill-[#a0a0ab] font-semibold text-lg/5"
												>
													Success Rate
												</tspan>

												<tspan
													x={viewBox.cx}
													y={(viewBox.cy ?? 0) + 20}
													className="fill-[#101828] text-3xl/10 font-semibold"
												>
													{successRate}%
												</tspan>
											</text>
										);
									}
								}}
							/>
						</RadialBarChart>
					</ChartContainer>
				</div>

				<div className="max-md:text-center">
					<p className="text-brand-neutral-black font-semibold leading-6">
						Excellence performance
					</p>

					<p className="text-brand-gray font-medium text-sm/5">
						Target {">"} 90%
					</p>
				</div>
			</div>
		</section>
	);
};

export default SuccessRate;
