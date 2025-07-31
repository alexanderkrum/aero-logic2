import { Riddle } from '../../domain/RiddleService';
import { createServerAdapter } from './ServerAdapterFactory';

export const useFetchRiddleAdapter = createServerAdapter({
    name: 'useFetchRiddleAdapter',
    callback: fetchRiddleById,
});

async function fetchRiddleById(id: string): Promise<Riddle> {
    const response = await fetch(`http://localhost:3000/api/riddle/${id}`);
    return await response.json();
}
