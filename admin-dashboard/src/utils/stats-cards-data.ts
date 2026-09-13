export const filterOptions = [
	{
		name: "Last 24 hours",
		value: "24_hours",
		comparison: "vs previous 24 hours",
	},
	{
		name: "Last 7 days",
		value: "7_days",
		comparison: "vs previous 7 days",
	},
	{
		name: "Last 30 days",
		value: "30_days",
		comparison: "vs previous 30 days",
	},
	{
		name: "Custom range",
		value: "custom",
		comparison: "vs previous period",
	},
] as const;

export type FilterOption = (typeof filterOptions)[number]["value"];

export const stats = {
	"24_hours": [
		{
			header: "Total Users",
			value: 184,
			isPositive: true,
			differencePercentage: 1.8,
		},
		{
			header: "Active Users",
			value: 126,
			isPositive: true,
			differencePercentage: 4.2,
		},
		{
			header: "Verified KYC Users",
			value: 97,
			isPositive: false,
			differencePercentage: 0.8,
		},
		{
			header: "Transaction Volume",
			value: "₦ 84.6M",
			isPositive: true,
			differencePercentage: 6.4,
		},
		{
			header: "Total Deposits",
			value: "₦ 42.8M",
			isPositive: true,
			differencePercentage: 3.1,
		},
		{
			header: "Total Withdrawals",
			value: "₦ 18.4M",
			isPositive: false,
			differencePercentage: 2.3,
		},
	],
	"7_days": [
		{
			header: "Total Users",
			value: 428,
			isPositive: true,
			differencePercentage: 5.7,
		},
		{
			header: "Active Users",
			value: 312,
			isPositive: true,
			differencePercentage: 8.4,
		},
		{
			header: "Verified KYC Users",
			value: 246,
			isPositive: true,
			differencePercentage: 3.6,
		},
		{
			header: "Transaction Volume",
			value: "₦ 426.3M",
			isPositive: true,
			differencePercentage: 9.2,
		},
		{
			header: "Total Deposits",
			value: "₦ 218.7M",
			isPositive: true,
			differencePercentage: 7.8,
		},
		{
			header: "Total Withdrawals",
			value: "₦ 96.2M",
			isPositive: false,
			differencePercentage: 1.4,
		},
	],
	"30_days": [
		{
			header: "Total Users",
			value: 1284,
			isPositive: true,
			differencePercentage: 12.5,
		},
		{
			header: "Active Users",
			value: 936,
			isPositive: true,
			differencePercentage: 9.8,
		},
		{
			header: "Verified KYC Users",
			value: 742,
			isPositive: true,
			differencePercentage: 14.2,
		},
		{
			header: "Transaction Volume",
			value: "₦ 2.5B",
			isPositive: true,
			differencePercentage: 18.6,
		},
		{
			header: "Total Deposits",
			value: "₦ 1.4B",
			isPositive: true,
			differencePercentage: 16.3,
		},
		{
			header: "Total Withdrawals",
			value: "₦ 682.4M",
			isPositive: false,
			differencePercentage: 4.7,
		},
	],
	"custom": [
		{
			header: "Total Users",
			value: 763,
			isPositive: true,
			differencePercentage: 7.3,
		},
		{
			header: "Active Users",
			value: 548,
			isPositive: false,
			differencePercentage: 2.1,
		},
		{
			header: "Verified KYC Users",
			value: 421,
			isPositive: true,
			differencePercentage: 11.6,
		},
		{
			header: "Transaction Volume",
			value: "₦ 1.18B",
			isPositive: true,
			differencePercentage: 13.9,
		},
		{
			header: "Total Deposits",
			value: "₦ 634.5M",
			isPositive: true,
			differencePercentage: 8.7,
		},
		{
			header: "Total Withdrawals",
			value: "₦ 302.8M",
			isPositive: false,
			differencePercentage: 3.2,
		},
	],
} satisfies Record<FilterOption, readonly Stat[]>;

export type Stat = {
	header: string;
	value: number | string;
	isPositive: boolean;
	differencePercentage: number;
};
