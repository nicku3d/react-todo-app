import React, { Fragment } from "react";

export default function EditableInput(props) {
    return (
        <Fragment>
          {
            props.showInput ? (
              <input className="form-control me-2 ms-1"
                type="text"
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onKeyDown={props.onKeyDown}
                autoFocus
            />
          ) : (
            <span className="d-block-inline w-100 align-middle text-truncate"
                onDoubleClick={props.onDoubleClick}
            >
            {props.value}
            </span>
        )
          }
        </Fragment>
    );
}