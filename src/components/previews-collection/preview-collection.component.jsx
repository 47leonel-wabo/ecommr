import React from "react";
import PreviewItem from "../preview-item/preview-item.component";
import "./preview-collection.style.scss";

const CollectionsPreview = ({ title, items }) => {
    return (
        <div className="collections">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                    .filter((item) => item.id >= 4)
                    .map((item) => (
                        <PreviewItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionsPreview;
