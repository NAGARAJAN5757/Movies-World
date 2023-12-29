import { Badge } from "@/components/ui/badge"
import React from "react"

export default function GenreBadge({ genre }: { genre: string }) {
	return (
		<Badge variant="secondary" className="text-xl md:mb-2 mb-4 mr-4">
			{genre}
		</Badge>
	)
}
