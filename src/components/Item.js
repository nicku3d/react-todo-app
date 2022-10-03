import EditableInput from "./EditableInput";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div class="btn-group">
                <button className="btn btn-success" onClick={() => {props.onDone(props.id)}}>v</button>
                <button className="btn btn-danger" onClick={() => {props.onDelete(props.id)}}>x</button>
            </div>
        </li>
    );
}