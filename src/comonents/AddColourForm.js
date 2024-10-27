import { useInput } from "./hooks";
import { useColour } from "./colour-hooks";

export default function AddColourForm(){
    const [titleProps, resetTitle] = useInput("")
    const [colourProps, resetColour]= useInput("#000000");
    const { addColour } = useColour();

    const submit = e => {
        e.preventDefault();
        addColour(titleProps.value, colourProps.value);
        resetTitle();
        resetColour();
    }

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="colour title..." required />
            <input {...colourProps} type="color" required/>
            <button>Add</button>
        </form>
    );
}