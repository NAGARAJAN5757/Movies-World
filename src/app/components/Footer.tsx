import {HeartIcon} from "lucide-react"
import React from "react"

export default function Footer() {
	return (
		<footer className="flex justify-center h-[8dvh] p-2 mt-3 border-t-[1px] border-[hsl(220 13% 91%)] dark:border-[hsl(215 27.9% 16.9%)] font-bold text-white">
			<h1 className="text-[#000] dark:text-[#fff]">
				Made with <HeartIcon className="inline" /> by NAGARAJAN R J
			</h1>
		</footer>
	)
}
