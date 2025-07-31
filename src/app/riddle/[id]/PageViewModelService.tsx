import { useFetchRiddleAdapter } from '../../common/adapter/FetchRiddleAdapter';

export async function getPageViewModel(riddleId: string) {
    const { getData: fetchRiddleById } = await useFetchRiddleAdapter();
    const riddle = await fetchRiddleById(riddleId);
    return { riddle };
}
