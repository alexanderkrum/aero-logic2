import {Riddle} from "@/app/domain/RiddleService";
import {useEffect, useState} from "react";
import {getAnswerFor} from "riddle-exam";
import {fetchRandomRiddle} from "@/app/common/adapter/RiddleAdapter";
import {getRiddleViewModelService} from "@/app/riddle/[id]/GetRiddleViewModelService";

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

    let viewModel = getRiddleViewModelService({
        correct, selected, random, riddle
    })
    return {...viewModel, handleClick};
}
