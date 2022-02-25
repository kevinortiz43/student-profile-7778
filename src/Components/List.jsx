import React from "react";

export default function List(props) {
  return (
    <div>
      <div>
        <p className="Grade-List">
          Test {props.num} {props.score} %{" "}
        </p>
      </div>
    </div>
  );
}
