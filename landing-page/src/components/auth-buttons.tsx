import Link from "next/link";
import { cn } from "cn";

type AuthButtonsProps = {
	variant?: "desktop" | "mobile";
};

const AuthButtons = ({ variant = "desktop" }: AuthButtonsProps) => {
	const isMobile = variant === "mobile";

	return (
		<div
			className={cn("items-center gap-3", {
				"flex justify-between sticky bottom-0 bg-white py-4 md:hidden": isMobile,
				"hidden md:flex": !isMobile,
			})}
		>
			<Link
				className={cn(
					"auth-button hover:outline-[#d1d1d6]/60 md:hover:outline-[#d1d1d633]/60",
					{
						"bg-white text-[#3f3f46] border-[#d1d1d6] w-1/2":
							isMobile,
						"bg-brand-gray text-white hover:bg-brand-gray/90 border-[#d1d1d633]":
							!isMobile,
					},
				)}
				href="/auth/login"
			>
				Log In
			</Link>

			<Link
				className={cn(
					"auth-button bg-brand-purple text-white hover:bg-brand-purple/90 border-brand-purple/30 hover:outline-brand-purple/60",
					{
						"w-1/2": isMobile,
					},
				)}
				href="/auth/register"
			>
				Create an Account
			</Link>
		</div>
	);
};

export default AuthButtons;
