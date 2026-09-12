"use client";

import Link from "next/link";

const NotFound = () => {
	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08090d] px-6 text-white">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/2 top-1/2 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

				<div className="absolute left-0 top-0 size-72 rounded-full bg-blue-500/10 blur-[7.5rem]" />

				<div className="absolute bottom-0 right-0 size-72 rounded-full bg-pink-500/10 blur-[7.5rem]" />
			</div>

			<section className="relative z-10 flex max-w-2xl flex-col items-center text-center pb-12">
				<div className="relative">
					<h1 className="select-none text-[clamp(9rem,25vw,18rem)] font-black leading-none tracking-[-0.08em] text-white/4">
						404
					</h1>

					<div className="absolute inset-0 flex items-center justify-center">
						<span className="text-7xl font-black tracking-tight sm:text-8xl">
							404
						</span>
					</div>
				</div>

				<div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur-md">
					Page not found
				</div>

				<h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
					Looks like you’re lost.
				</h2>

				<p className="mt-5 max-w-lg text-base leading-7 text-white/50 sm:text-lg">
					The page you’re looking for doesn’t exist, has been moved,
					or may have been removed. Let’s get you back somewhere
					useful.
				</p>

				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<Link
						href="/"
						className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
					>
						← Back to home
					</Link>

					<button
						className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
						onClick={() => window.history.back()}
					>
						Go back
					</button>
				</div>
			</section>
		</main>
	);
};

export default NotFound;
