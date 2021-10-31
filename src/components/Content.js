import React from "react";
import "./Content.css";
const Content = (props) => {
  return (
    <div className="contentbox">

      <div className="box">
        <div id="diam" style={{'margin-top': props.offset}}></div>
        <div className="content">
          <p>{props.text}</p>
          <p>{props.text}</p>
          <p>{props.text}</p>
          <p>{props.text}</p>`  `
          <p>{props.text}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Content;
