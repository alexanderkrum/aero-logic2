'use client';

import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {fetchRandomRiddle} from "@/app/domain/riddleAdapter";

export const RandomRiddleEntryControl = () => {
    const router = useRouter();
    const [id, setId] = useState<string>();
    const handleClick = () => {
        router.push(`/riddle/${id}`);
    };

    useEffect(() => {
        fetchRandomRiddle()
            .then(riddle => setId(riddle.id));
    }, []);

    if (!id) {
        return null;
    }

    return (
        <button onClick={handleClick} className="border border-blue-500 p-5">
            Resolve random riddle
        </button>
    );
};
