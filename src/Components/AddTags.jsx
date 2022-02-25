import React, { useState } from "react";

export default function AddTags(props) {
  const [addTag, SetaddTag] = useState("");

  const handleAddTag = (event) => {
    console.log(addTag);
    SetaddTag(event.target.value);
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      props.onEnter(event, props.API, addTag);
      SetaddTag("");
    }
  };

  return (
    <div>
      <input
        id={props.API.id}
        className="addTagBar"
        type="text"
        placeholder="Add a Tag"
        value={addTag}
        onChange={handleAddTag}
        onKeyDown={onEnter}
      />
    </div>
  );
}
