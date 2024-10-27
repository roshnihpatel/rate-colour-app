import Colour from './Colour';
import { useColour } from './colour-hooks';

export default function ColoursList(){
    const { colours } = useColour();

    if(!colours.length) return <div>No Colours Listed</div>;
    return (
        <div className="colours-list">
        {colours.map((colour) => (
            <Colour key={colour.id} {...colour}/>
        ))}
        </div>
    );
}