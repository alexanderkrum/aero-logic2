import {RiddleAnswers} from './RiddleAnswers';
import {useRiddlePage} from "@/app/riddle/[id]/UseRiddlePage";

export default async function RiddlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    const {riddle} = await useRiddlePage(id);

    return (
        <main className="text-lg">
            <p dangerouslySetInnerHTML={{ __html: riddle.contents }} className="mb-16" />
            <RiddleAnswers riddle={riddle} />
        </main>
    );
}
