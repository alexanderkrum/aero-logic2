import {fetchRiddleById} from "@/app/common/adapter/RiddleAdapter";

export async function getPageViewModel(riddleId: string) {
    const riddle = await fetchRiddleById(riddleId);
    return {riddle};
}
