"use client"
import React from "react"
import StarRatings from "react-star-ratings"
export default function StarRating({movieRating}: {movieRating: number}) {
	return (
		<StarRatings
			numberOfStars={10}
			starRatedColor="#ffa707"
			starEmptyColor="#666867"
			rating={movieRating}
			starDimension="20px"
			starSpacing="5px"
		/>
	)
}
