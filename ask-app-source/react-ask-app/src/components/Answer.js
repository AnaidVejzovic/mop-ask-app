import React from "react";
import "./ListStyle.css";

const Answer = (props) => {
  return (
    <div
      className="list-group-item list-group-item-action d-flex gap-3 py-1"
      //style={{ width: "80%", marginLeft: "10%" }}
    >
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <small className="text-success">{props.name}: </small>
          <small className="mb-0 opacity-100">
            {props.answer}
            <br />
          </small>
        </div>
      </div>
    </div>
  );
};

export default Answer;
