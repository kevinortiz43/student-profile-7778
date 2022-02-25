import React from "react";

export default function SearchName(props) {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search by name"
        onChange={(event1) => {
          props.setSearchBar(event1.target.value);
        }}
      />
    </div>
  );
}
