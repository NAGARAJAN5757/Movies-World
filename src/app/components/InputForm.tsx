"use client"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import React, {FormEvent, useRef, useState} from "react"
import {useRouter} from "next/navigation"

export default function InputForm() {
	const movieContent = useRef<HTMLInputElement>(null)
	const [isButtonDisabled, setIsButtonDisabled] = useState(true)
	const router = useRouter()

	const handleClick = (e: FormEvent) => {
		e.preventDefault()
		router.push(`/movie/${movieContent.current?.value}`)
	}

	const handleChange = () => {
		if (movieContent.current?.value === "") {
			setIsButtonDisabled(true)
		} else {
			setIsButtonDisabled(false)
		}
	}

	return (
		<form className="flex md:flex-grow flex-row flex-wrap md:flex-nowrap justify-center">
			<Input
				className="mr-4 md:mb-2 mb-4"
				name="movie"
				ref={movieContent}
				placeholder="Enter Movie Name"
				onChange={handleChange}
			/>
			<Button
				onClick={handleClick}
				disabled={isButtonDisabled}
				variant="secondary"
			>
				Search
			</Button>
		</form>
	)
}
