import {createContext, useState, useContext} from "react";
import colourData from "../colour-data.json"
import { v4 } from "uuid";

const ColourContext = createContext();

export const useColour = () => useContext(ColourContext);

export default function ColourProvider({children}) {
    const [colours, setColours] = useState(colourData);

    const addColour = (title, colour) => 
        setColours([
            ...colours,
            {
                id: v4(),
                title,
                colour,
                rating: 0
            }
        ]);
    
    const removeColour = id => setColours(colours.filter(colour => colour.id !== id));

    const rateColour = (id, rating) => setColours(colours.map(colour => colour.id === id ? {...colour, rating} : colour ));

    return(
        <ColourContext.Provider value={{colours, addColour, removeColour, rateColour}}>
            {children}
        </ColourContext.Provider>
    )    
}