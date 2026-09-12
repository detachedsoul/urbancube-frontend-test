import Jane from "@/assets/jane";
import John from "@/assets/john";
import Olivia from "@/assets/olivia";
import Phoenix from "@/assets/phoenix";
import { cn } from "cn";
import { ArrowDownIcon } from "lucide-react";

const users = [
	{
		name: "Olivia Rhye",
		email: "olivia@gmail.com",
		dataCreated: "12th Jun, 2025 10:00 AM",
		status: "Active",
		profilePicture: <Olivia />,
	},
	{
		name: "Phoenix Baker",
		email: "phoenix@gmail.com",
		dataCreated: "12th Jun, 2025 10:00 AM",
		status: "Inactive",
		profilePicture: <Phoenix />,
	},
	{
		name: "Jane Doe",
		email: "jane@gmail.com",
		dataCreated: "12th Jun, 2025 10:00 AM",
		status: "Active",
		profilePicture: <Jane />,
	},
	{
		name: "John Doe",
		email: "john@gmail.com",
		dataCreated: "12th Jun, 2025 10:00 AM",
		status: "Inactive",
		profilePicture: <John />,
	},
];

const NewSignUps = () => {
	return (
		<section className="rounded-xl border border-[#e4e4e7] overflow-x-hidden">
			<h3 className="text-sm/5 font-medium text-[#3f3f46] border-b border-[#f4f4f5] px-4 py-4.5">
				New User Sign ups
			</h3>

			<div className="overflow-x-auto hide-scrollbar">
				<table className="w-full border-collapse whitespace-nowrap table-auto">
					<thead className="text-left border-b border-[#e4e4e7]">
						<tr className="bg-[#fafafa]">
							<th className="text-brand-gray font-medium leading-6 px-8 py-4 text-sm">
								Name
							</th>

							<th className="text-brand-gray font-medium leading-6 px-8 py-4 text-sm">
								Date Created
							</th>

							<th className="text-brand-gray font-medium leading-6 px-8 py-4 text-sm flex items-center gap-2">
								Status <ArrowDownIcon />
							</th>
						</tr>
					</thead>

					<tbody>
						{users.map((user) => (
							<tr
								className="border-b border-[#e4e4e7] last:border-b-0"
								key={user.name}
							>
								<td className="py-4 px-6 inline-flex gap-3 items-center text-brand-gray w-max font-medium text-sm/5">
									{user.profilePicture}

									<div>
										<p className="text-[#3f3f46]">
											{user.name}
										</p>

										<p className="text-brand-gray">
											{user.email}
										</p>
									</div>
								</td>

								<td className="py-4 px-6 text-[#667085] font-medium text-sm/5">
									{user.dataCreated}
								</td>

								<td className="py-4 px-6">
									<span
										className={cn(
											"rounded-lg py-2 px-3 border font-medium inline-block text-sm/5 w-full text-center",
											{
												"border-[#baf5de] bg-[#D8fff0] text-[#054e31]":
													user.status === "Active",
												"border-[##fecfb9] bg-[#ffe7dc] text-[#93370c]":
													user.status !== "Active",
											},
										)}
									>
										{user.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default NewSignUps;
