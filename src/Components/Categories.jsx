import React, { useState } from "react";
import List from "./List";
import Button from "./Button";
import AddTags from "./AddTags";
export default function Categories(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="API-Call" key={props.API.id}>
      <div className="Thumbnail-Container">
        <img className="Thumbnails" alt="Thumbnails" src={props.API.pic} />
      </div>
      <div className="Contact-List">
        <h1 className="Names">
          {props.API.firstName.toUpperCase()} {props.API.lastName.toUpperCase()}{" "}
        </h1>
        <p className="Emails"> Email: {props.API.email} </p>
        <p className="Companies"> Company: {props.API.company} </p>
        <p className="Skills"> Skill: {props.API.skill} </p>
        <p className="Averages">
          {" "}
          Average:{" "}
          {props.API.grades.reduce((sum, curr) => sum + Number(curr), 0) /
            props.API.grades.length}
          %{" "}
        </p>
        {show
          ? props.API.grades.map((score, i) => (
              <List score={score} key={i} num={i + 1} />
            ))
          : null}

        <div className="tag-Container">
          {props.API.tags.map((tag, i) => (
            <div className="tag" key={i}>
              <h3>{tag} </h3>
            </div>
          ))}
        </div>

        <AddTags key={props.API.id} API={props.API} onEnter={props.onEnter} />
      </div>

      <Button setShow={setShow} show={show} />
    </div>
  );
}
