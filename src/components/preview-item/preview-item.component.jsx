import React from "react";
import "./preview-item.style.scss";

const PreviewItem = ({ imageUrl, name, price }) => {
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
};

export default PreviewItem;
