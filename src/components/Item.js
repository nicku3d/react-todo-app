import EditableInput from "./EditableInput";
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

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
        <li className="list-group-item d-flex justify-content-between">
            <EditableInput
                value={props.name}
                showInput={props.showInput}
                onChange={handleChange}
                onBlur={handleBlur}
                onDoubleClick={handleDoubleClick}
                onKeyDown={handleKeyDown}
            />
                <button className="btn btn-success bg-light text-dark m-1" onClick={() => {props.onDone(props.id)}}>
                    <AiOutlineCheck/>
                </button>
                <button className="btn btn-danger bg-light text-dark m-1" onClick={() => {props.onDelete(props.id)}}>
                    <AiOutlineClose/>
                </button>
        </li>
    );
}