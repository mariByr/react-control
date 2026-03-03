
import type {ICast} from "../../models/cast/ICast.ts";


interface ActorsSectionProps {

    cast: ICast
}

export const ActorsSection = ({cast}: ActorsSectionProps) => {
    return (
        <div>
            <span>{cast.name}</span>
        </div>
    );
};
