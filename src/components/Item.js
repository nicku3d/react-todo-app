import EditableInput from "./EditableInput";

export default function Item(props) {

    const handleChange = (e) => {
        props.onChange(props.id, e);
    };

    const handleDoubleClick = (e) => {
        props.onDoubleClick(props.id, e);
    };

    const handleBlur = (e) => {
        props.onBlur(props.id, e);
    };
    
    const handleKeyDown = (e) => {
        props.onKeyDown(e);
    };


    return (
        <li>
            <EditableInput
                value={props.name}
                showInput={props.showInput}
                onChange={handleChange}
                onBlur={handleBlur}
                onDoubleClick={handleDoubleClick}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => {props.onDone(props.id)}}>v</button>
            <button onClick={() => {props.onDelete(props.id)}}>x</button>
        </li>
    );
}