import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Button(props) {
  return (
    <div>
      <button onClick={() => props.setShow(!props.show)}>
        {props.show ? <FaMinus /> : <FaPlus />}
      </button>
    </div>
  );
}
