import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTags from "./AddTags";
import SearchTags from "./SearchTags";
import SearchName from "./SearchName";
import Button from "./Button";
import Categories from "./Categories";

export default function API() {
  const [fetching, setFetching] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [tags, setTags] = useState([]);
  
  const [searchTags, setSearchTags] = useState("");

  let onEnter = (event, API, newTag) => {
    if (event.key === "Enter") {
      console.log(event.target.value);

      let newFetching = [...fetching];
      let index = newFetching.findIndex((o) => API.id === o.id);

      newFetching[index].tags.push(newTag);
      setFetching(newFetching);

      // setFetching(fetching.map(obj =>  if()))
      // setTags([...tags, { id: API.id, tag: event.target.value }]);
      console.log(tags);
    }
  };

  let fetch = {
    method: "GET",
    url: `https://api.hatchways.io/assessment/students`,
  };
  function callAPI() {
    axios
      .request(fetch)
      .then(function (response) {
        setFetching(
          response.data.students.map((object) => {
            return { ...object, tags: [] };
          })
        );
        console.log(response.data.students);
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
        <SearchTags setSearchTags={setSearchTags} />
      </div>
      <div className="mega-Container">
        {fetching
          .filter((value) => {
            console.log(value.tags.includes("tag"));
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
             
            </div>
          ))}
      </div>
    </div>
  );
}
