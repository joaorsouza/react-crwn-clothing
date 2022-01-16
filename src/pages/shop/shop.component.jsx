import React from "react";
import SHOP_DATA from "./shop.data";
import "../../components/preview-collection/preview-collection.component";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherColletionProps }) => {
          return <CollectionPreview key={id} {...otherColletionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
