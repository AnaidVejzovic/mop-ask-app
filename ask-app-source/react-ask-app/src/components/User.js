import React from "react";
import "./ListStyle.css";

const User = (props) => {
  return (
    <div className="list-group-item list-group-item-action d-flex gap-3 py-3 w-50">
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 className="mb-0">
            {props.firstName} {props.lastName}
          </h6>
        </div>
        <small className="opacity-70 text-nowrap text-success">
          Answers: {props.answers}
        </small>
      </div>
    </div>
  );
};

export default User;
