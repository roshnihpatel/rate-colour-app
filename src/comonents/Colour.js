import { FaTrash } from "react-icons/fa6";
import StarRating from "./StarRating";
import { useColour } from "./colour-hooks"

export default function Colour({
    id,
    title, 
    colour, 
    rating, 
 }) {
    const {rateColour, removeColour} = useColour();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColour(id)}>
                <FaTrash/>
            </button>
            <div style={{
                height: 150, 
                backgroundColor: colour, 
                width:"50%", 
                marginLeft:"25%", 
                marginRight:"25%", 
                marginTop:"50px", 
                marginBottom:"50px"
                }}/>
            <StarRating 
            selectedStars={rating}
            onRate={rating => rateColour(id, rating)}/>
        </section>
    );
}