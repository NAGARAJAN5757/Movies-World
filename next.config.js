/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https" || "http",
				hostname: "**.vercel.app" || "localhost:3000",
				port: process.env.port || "3000",
				pathname: "/movie/[name]",
			},
		],
		domains: ["m.media-amazon.com"],
	},
}

module.exports = nextConfig
