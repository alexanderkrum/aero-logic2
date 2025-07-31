import { useFetchRiddleAdapter } from '../../common/adapter/FetchRiddleAdapter';

export async function useRiddlePage(id: string) {
    const { getData } = await useFetchRiddleAdapter();
    const riddle = await getData(id);
    return { riddle };
}
