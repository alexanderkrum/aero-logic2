'use client';

import {Riddle} from '../../domain/RiddleService';
import classNames from 'classnames';
import Link from 'next/link';
import {useRiddleAnswers} from "@/app/riddle/[id]/UseRiddleAnswers";

type Props = {
    riddle: Riddle;
};

export const RiddleAnswers = ({ riddle }: Props) => {
    const {correct, selected, random, handleClick, sorted, isCorrect, isWrong} = useRiddleAnswers(riddle);

    return (
        <>
            <p className="mb-5">Possible answers:</p>
            <ul>
                {sorted.map((answer) => (
                    <li
                        key={answer.id}
                        onClick={() => handleClick(answer.id)}
                        className={classNames('border py-2 pl-3 pr-2 my-1', {
                            'cursor-pointer': !selected,
                            'border-blue-500': !correct,
                            "border-green-700 text-green-900 before:content-['✓']":
                                selected === answer.id &&
                                correct &&
                                correct.id === answer.id,
                            "border-red-700 text-red-800  before:content-['✗']":
                                selected === answer.id &&
                                correct &&
                                correct.id !== answer.id,
                        })}
                    >
                        <span className="pl-2">{answer.text}</span>
                    </li>
                ))}
            </ul>
            {isCorrect && (
                <div className="bg-green-400 my-6 p-3">
                    {"Great job! You're right 🙏"}
                </div>
            )}
            {isWrong && (
                <div className="bg-red-300  my-6 p-3">
                    {'This time your answer is wrong.'}
                </div>
            )}
            {random && (
                <div className="mt-5">
                    <Link href={`/riddle/${random}`} className="underline">
                        Play one more
                    </Link>
                </div>
            )}
        </>
    );
};
