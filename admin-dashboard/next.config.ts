import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		qualities: [50, 75, 100],
	},
	allowedDevOrigins: ["192.168.0.172"],
};

export default nextConfig;
