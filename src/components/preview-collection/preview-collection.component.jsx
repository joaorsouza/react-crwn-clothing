/* eslint-disable no-undef */
import React from "react";
import "./preview-collection.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          //show only first 4 items
          .filter((item, idx) => {
            return idx < 4;
          })

          .map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
