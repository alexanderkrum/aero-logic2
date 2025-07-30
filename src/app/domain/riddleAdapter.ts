import {Riddle} from "@/app/domain/RiddleService";

export async function fetchRandomRiddle(id?: string): Promise<Riddle> {
    const params = new URLSearchParams()
    if (id) {
        params.set("excluded", id)
    }
    return fetch(`http://localhost:3000/api/random-riddle?${params}`)
        .then((response) => response.json())
}
