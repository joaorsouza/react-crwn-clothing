/* eslint-disable no-undef */
import React from "react";
import "./preview-collection.scss";
import CollectionItem from "../colection-item/collection-item.component";

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
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
