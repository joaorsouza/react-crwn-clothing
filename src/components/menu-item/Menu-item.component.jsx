/* eslint-disable react/prop-types */
import React from "react";
import "./Menu-item.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onClick={() => {
          history.push(`${match.url}${linkUrl}`);
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase() || ""}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
