import React from "react"
import ThemeSwitch from "./ThemeMode"
export default function Header() {
	return (
		<header>
			<nav className="flex justify-around  text-[#000] dark:text-[#fff]  p-2 mb-3 border-b-[1px] border-[hsl(220 13% 91%)] dark:border-[hsl(215 27.9% 16.9%)] font-bold">
				<h1>Movies World</h1>
				<ThemeSwitch />
			</nav>
		</header>
	)
}
