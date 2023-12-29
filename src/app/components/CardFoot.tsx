import {CardFooter} from "@/components/ui/card"
import React from "react"
import StarRating from "./StarRatings"
import GenreBadge from "./GenreBadge"
export default function CardFoot({
	genre,
	rating,
}: {
	genre: string
	rating: string
}) {
	const MovieGenres = genre.split(",")
	const movieRating: number = rating === "N/A" ? 0 : parseFloat(rating)
	return (
		<CardFooter className="flex-wrap justify-around">
			<div>
				<h2 className="font-semibold text-xl mt-1">
					IMDB Rating&nbsp;&nbsp;{movieRating !== 0 && `${rating}/10`}
				</h2>
				<div className="md:mb-2 mb-4">
					{movieRating !== 0 ? (
						<StarRating movieRating={movieRating} />
					) : (
						"N/A"
					)}
				</div>
			</div>
			<div>
				{MovieGenres.map((genre, index) => (
					<GenreBadge key={index} genre={genre} />
				))}
			</div>
		</CardFooter>
	)
}
