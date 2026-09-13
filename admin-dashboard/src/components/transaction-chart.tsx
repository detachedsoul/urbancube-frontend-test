"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

type ChartData = {
	label: string;
	amount: number;
}[];

type TransactionChartProps = {
	data: ChartData;
};

const chartConfig = {
	amount: {
		label: "Amount",
		color: "#009f59",
	},
} satisfies ChartConfig;

const TransactionChart = ({ data }: TransactionChartProps) => {
	return (
		<div className="overflow-hidden">
			<div className="h-75">
				<ChartContainer
					className="size-full"
					config={chartConfig}
				>
					<AreaChart
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
						}}
						accessibilityLayer
					>
						<defs>
							<linearGradient
								id="transactionVolumeGradient"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="0%"
									stopColor="#009f59"
									stopOpacity={0.08}
								/>

								<stop
									offset="100%"
									stopColor="#009f59"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>

						<CartesianGrid
							vertical={false}
							strokeDasharray="0"
						/>

						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dot" />}
						/>

						<XAxis
							dataKey="label"
							interval={0}
							tickLine={false}
							axisLine={false}
							padding={{ left: 16, right: 16 }}
							tick={{
								fontSize: 12,
							}}
						/>

						<YAxis
							domain={[0, 100]}
							ticks={[0, 20, 40, 60, 80, 100]}
							tickLine={false}
							axisLine={false}
							width="auto"
							tick={{
								fontSize: 12,
							}}
						/>

						<Area
							type="monotone"
							dataKey="amount"
							stroke="#009f59"
							strokeWidth={2}
							fill="url(#transactionVolumeGradient)"
							dot={false}
							activeDot={false}
						/>
					</AreaChart>
				</ChartContainer>
			</div>
		</div>
	);
};

export default TransactionChart;
