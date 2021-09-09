import React from "react";
import "./productItemMenu.styles.scss";

const ProductItemMenu = ({ title, imageUrl, size }) => (
    <div className={`${size} product`}>
        <div
            className="bg-image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Buy Now</span>
        </div>
    </div>
);

export default ProductItemMenu;
