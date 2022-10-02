import React, {Fragment} from "react";

export default function EditableInput(props) {
  return (
    <Fragment>
      {
        props.showInput ? (
          <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onKeyDown={props.onKeyDown}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={props.onDoubleClick}
          >
            {props.value}
          </span>
        )
      }
    </Fragment>
  );
}