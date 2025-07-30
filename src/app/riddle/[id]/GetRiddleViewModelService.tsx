import {Riddle} from "@/app/domain/RiddleService";
import {useMemo} from "react";

export function getRiddleViewModelService(params: {
    correct: { id: string } | undefined;
    selected: string | undefined;
    random: string | undefined;
    riddle: Riddle
}) {
    let {riddle, correct, random, selected} = params

    const sorted = useMemo(
        () => riddle.answers.toSorted(() => Math.random() - 0.5),
        [riddle.answers],
    );

    let isCorrect = selected && correct?.id === selected;
    let isWrong = selected && correct && !isCorrect;

    return {correct, selected, random: correct ? random : undefined, sorted, isCorrect, isWrong}
}
