import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <h1 className="title">{props.children}</h1>
      <div className="scores">
        <h2>
          Score: {props.score} Highscore: {props.highscore}
        </h2>
      </div>
    </div>
  );
}

export default Title;
