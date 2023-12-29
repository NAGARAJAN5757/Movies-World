import { CardTitle, CardHeader } from "@/components/ui/card"
import React from "react"
import InputForm from "./InputForm"

export default function CardHead() {
	return (
		<CardHeader>
			<CardTitle className="flex-grow flex-row justify-center">
				<InputForm />
			</CardTitle>
		</CardHeader>
	)
}
