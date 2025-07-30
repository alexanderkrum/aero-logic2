import {RiddleAnswers} from './RiddleAnswers';
import {fetchRiddleById} from "@/app/common/adapter/RiddleAdapter";

export default async function RiddlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    const riddle = await fetchRiddleById(id);

    return (
        <main className="text-lg">
            <p dangerouslySetInnerHTML={{ __html: riddle.contents }} className="mb-16" />
            <RiddleAnswers riddle={riddle} />
        </main>
    );
}
