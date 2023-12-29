import React from "react"
import Image from "next/image"
import {CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

export default async function CardDetails({data}: {data: MovieProps}) {
	return (
		<CardContent>
			<div className="flex justify-around gap-8 flex-wrap lg:flex-nowrap">
				{data.Poster !== "N/A" ? (
					<Image
						src={`${data.Poster}`}
						priority={true}
						alt="poster"
						width={400}
						height={400}
					/>
				) : (
					"No Poster Available"
				)}
				<div>
					<h1 className="text-center">
						<Badge className="text-4xl font-bold text-center">
							{data.Title}
						</Badge>
					</h1>
					<br />
					<br />
					<div className="flex justify-around flex-wrap">
						<p>
							<span className="font-semibold text-xl">
								Language{data.Language.includes(",") ? "s" : ""}
								&nbsp;&nbsp;
							</span>
							{data.Language}
						</p>
						<p>
							<span className="font-semibold text-xl">
								Runtime&nbsp;&nbsp;
							</span>
							{data.Runtime}
							{data.Runtime !== "N/A" && "s"}
						</p>
						<p>
							<span className="font-semibold text-xl">
								Year&nbsp;&nbsp;
							</span>
							{data.Year}
						</p>
					</div>
					<h1 className="text-2xl font-semibold">Plot</h1>
					<p>{data.Plot}</p>
					<h1 className="text-2xl font-semibold">Actors</h1>
					<p>{data.Actors}</p>
					<h1 className="text-2xl font-semibold">Director</h1>
					<p>{data.Director}</p>
					<h1 className="text-2xl font-semibold">
						Writer{data.Actors.includes(",") ? "s" : ""}
					</h1>
					<p>{data.Writer}</p>
				</div>
			</div>
		</CardContent>
	)
}
