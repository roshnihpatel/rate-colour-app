import { FaStar } from "react-icons/fa6";

export default function Star({selected = false, onSelect = f => f}) {
    return <FaStar color={selected ? "red" : "grey"}  onClick={onSelect}/>;
}