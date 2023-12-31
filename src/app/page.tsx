import {Card, CardContent} from "@/components/ui/card"
import CardHead from "./components/CardHead"
export default function Home() {
	return (
		<main className="flex  justify-center my-3 min-h-[calc(80dvh-1.5rem)]">
			<Card className="w-[90%]">
				<CardHead />
				<CardContent className="text-center">
					Enter any movie name to get information about the movie
				</CardContent>
			</Card>
		</main>
	)
}
