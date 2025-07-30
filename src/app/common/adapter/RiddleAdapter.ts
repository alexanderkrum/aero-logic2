import {Riddle} from "@/app/domain/RiddleService";

export async function fetchRandomRiddle(id?: string): Promise<Riddle> {
    const params = new URLSearchParams()
    if (id) {
        params.set("excluded", id)
    }
    return fetch(`http://localhost:3000/api/random-riddle?${params}`)
        .then((response) => response.json())
}

export async function fetchRiddleById(id: string) {
    const response = await fetch(`http://localhost:3000/api/riddle/${id}`);
    const riddle: Riddle = await response.json();
    return riddle;
}
