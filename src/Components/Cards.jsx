import React from "react";

const Cards = (props) => {
  return (
    <React.StrictMode>
      <div className="card">
        <div className="card__head">
          <img src={props.pic} alt="profile" />
          <div className="card__profile">
            <h2>{props.profileName}</h2>
            <p className="varified">Varified Graduate</p>
          </div>
        </div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </React.StrictMode>
  );
};

export default Cards;
