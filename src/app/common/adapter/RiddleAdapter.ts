import { Riddle } from '@/app/domain/RiddleService';
import { createClientAdapter } from './ClientAdapterFactory';

export const useRetrieveRandomRiddle = createClientAdapter<Riddle, string | undefined>({
    name: 'use-retrieve-random-riddle',
    callback: fetchRandomRiddle,
});

async function fetchRandomRiddle(id?: string): Promise<Riddle> {
    const params = new URLSearchParams();
    if (id) {
        params.set('excluded', id);
    }
    return fetch(`http://localhost:3000/api/random-riddle?${params}`).then((response) =>
        response.json(),
    );
}
