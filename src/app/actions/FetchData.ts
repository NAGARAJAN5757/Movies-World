"use server"
export async function fetchData(movieName: string) {
	const res = await fetch(
		`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&t=${movieName}`
	)
	const data = await res.json()
	return data
}
