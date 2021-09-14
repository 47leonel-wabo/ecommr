import React from "react";
import CollectionsPreview from "../../components/previews-collection/preview-collection.component";
import { SHOP_DATA } from "./../../shop.data";
import "./shop.style.scss";

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
                {collections.map((collection, index) => (
                    <CollectionsPreview key={index} {...collection} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
