import {Riddle} from "@/app/domain/RiddleService";
import {useEffect, useState} from "react";
import {getAnswerFor} from "../../../../packages/riddle-exam";
import {fetchRandomRiddle} from "@/app/domain/riddleAdapter";
import {getRiddleViewModel} from "@/app/riddle/[id]/GetRiddleViewModel";

export function useRiddleAnswers(riddle: Riddle) {
    const [correct, setCorrect] = useState<{ id: string }>();
    const [selected, setSelected] = useState<string>();
    const [random, setRandom] = useState<string>();
    const handleClick = async (id: string) => {
        if (selected) {
            return;
        }

        setSelected(id);

        const data = await getAnswerFor(riddle.id);

        setCorrect(data);
    };

    useEffect(() => {
        fetchRandomRiddle(riddle.id).then(riddle => setRandom(riddle.id))
    }, []);

    let viewModel = getRiddleViewModel({
        correct, selected, random, riddle
    })
    return {...viewModel, handleClick};
}
