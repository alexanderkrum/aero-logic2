'use client';

import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import { useRetrieveRandomRiddle } from "@/app/common/adapter/RiddleAdapter";

export const RandomRiddleEntryControl = () => {
    const router = useRouter();
    const { getData } = useRetrieveRandomRiddle();
    const [id, setId] = useState<string>();
    const handleClick = () => {
        router.push(`/riddle/${id}`);
    };

    useEffect(() => {
        getData()
            .then(riddle => setId(riddle.id));
    }, []);

    if (!id) {
        return null;
    }

    return (
        <button data-test="open-random-riddle-control" onClick={handleClick} className="border border-blue-500 p-5">
            Resolve random riddle
        </button>
    );
};
