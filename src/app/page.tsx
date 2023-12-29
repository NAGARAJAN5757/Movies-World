import {Card, CardContent} from "@/components/ui/card"
import CardHead from "./components/CardHead"
export default function Home() {
	return (
		<main className="flex flex-grow justify-center min-h-[80dvh]">
			<Card className="w-[90%]">
				<CardHead />
				<CardContent className="text-center">
					Enter any movie name to get information about the movie
				</CardContent>
			</Card>
		</main>
	)
}
