import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchTags from "./SearchTags";
import SearchName from "./SearchName";
import Categories from "./Categories";

export default function API() {
  const [fetching, setFetching] = useState([]);
  // useState for setting up fetch request
  const [searchBar, setSearchBar] = useState("");
  //  useState for searching name
  const [searchTags, setSearchTags] = useState("");
  //   useState for searching tags

  let onEnter = (event, API, newTag) => {
    if (event.key === "Enter") {
      let newFetching = [...fetching];
      let index = newFetching.findIndex((o) => API.id === o.id);
      newFetching[index].tags.push(newTag);
      setFetching(newFetching);
      // adding a tag property to our objects
    }
  };
  let fetch = {
    method: "GET",
    url: `https://api.hatchways.io/assessment/students`,
  };
  function callAPI() {
    // axios call
    axios
      .request(fetch)
      .then(function (response) {
        setFetching(
          response.data.students.map((object) => {
            return { ...object, tags: [] };
          })
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <div className="searchbar-Container">
        <SearchName setSearchBar={setSearchBar} />
        {/* Component for our name searchbar */}
        <SearchTags setSearchTags={setSearchTags} />
        {/* Component for our tag searchbar  */}
      </div>
      <div className="main-Container">
        {fetching
          // filtering for both our searchbars
          .filter((value) => {
            if (searchBar === "") {
              if (searchTags === "") {
                return true;
              } else if (value.tags.includes(searchTags.toLowerCase())) {
                return true;
              } else {
                return false;
              }
            } else if (
              value.lastName.toLowerCase().includes(searchBar.toLowerCase()) ||
              value.firstName.toLowerCase().includes(searchBar.toLowerCase())
            ) {
              if (searchTags === "") {
                return true;
              } else if (value.tags.includes(searchTags.toLowerCase())) {
                return true;
              } else {
                return false;
              }
            }
          })
          .map((API) => (
            <div>
              <Categories key={API.id} API={API} onEnter={onEnter} />
              {/* Component for displaying the categories of each client */}
            </div>
          ))}
      </div>
    </div>
  );
}
