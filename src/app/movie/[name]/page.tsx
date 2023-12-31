import CardDetails from "@/app/components/CardDetails"
import {Card} from "@/components/ui/card"
import React from "react"
import CardHead from "@/app/components/CardHead"
import {Metadata} from "next"
import {fetchData} from "@/app/actions/FetchData"
import CardFoot from "@/app/components/CardFoot"
import MovieNotFound from "@/app/components/MovieNotFound"

type Params = {
	params: {
		name: string
	}
}

export async function generateMetadata({
	params: {name},
}: Params): Promise<Metadata> {
	const data: MovieProps = await fetchData(name)
	return {
		title: (data.Title ? data.Title : name) + " | Movies World",
		description: data.Plot,
	}
}

export default async function Movie({params: {name}}: Params) {
	const data: MovieProps = await fetchData(name)
	return (
		<main className="flex  justify-center my-3 min-h-[calc(80dvh-1.5rem)]">
			<Card className="w-[90%]">
				<CardHead />
				{data.Response === "True" ? (
					<section>
						<CardDetails data={data} />
						<CardFoot rating={data.imdbRating} genre={data.Genre} />
					</section>
				) : (
					<MovieNotFound />
				)}
			</Card>
		</main>
	)
}
