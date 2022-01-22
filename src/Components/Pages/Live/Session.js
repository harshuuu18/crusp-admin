import React from "react";

function Session({ data }) {
  return (
    <div className="session">
      <div className="session-img"></div>
      <div className="session-content">
        <h3>{data.sessionTitle}</h3>
        <p>{data.sessionDescription}</p>
      </div>
      <div className="session-join">
        <p>2hrs 40mins</p>
        <a>Join Now</a>
      </div>
    </div>
  );
}

export default Session;
