import React from "react";

export default function SearchTags(props) {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Tags"
        onChange={(event2) => {
          props.setSearchTags(event2.target.value);
        }}
      />
    </div>
  );
}
