import {CardContent} from "@/components/ui/card"
import React from "react"

export default function MovieNotFound() {
	return (
		<CardContent className="flex justify-center items-center text-center">
			Movie Not Found
			<br />
			Please check for any typographical error in input
		</CardContent>
	)
}
