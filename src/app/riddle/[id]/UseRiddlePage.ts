import {fetchRiddleById} from "@/app/common/adapter/RiddleAdapter";

export async function useRiddlePage(id: string) {
    const riddle = await fetchRiddleById(id);
    return {riddle};
}
