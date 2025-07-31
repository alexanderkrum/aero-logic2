import {RandomRiddleEntryControl} from './RandomRiddleEntryControl';
import {getPageViewModel} from "@/app/pageViewModelService";

export default function Home() {
    let {workInterval, timeStamp} = getPageViewModel(new Date());

    return (
        <main className="text-lg">
            <div>
                <p data-test="work-interval">Work Interval: {workInterval}</p>
                <p>
                    Timestamp: {timeStamp}
                </p>
                <div className="p-20 text-center">
                    <RandomRiddleEntryControl />
                </div>
            </div>
        </main>
    );
}
