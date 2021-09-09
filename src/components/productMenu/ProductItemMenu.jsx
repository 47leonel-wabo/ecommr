import React from "react";
import { withRouter } from "react-router-dom";
import "./productItemMenu.styles.scss";

const ProductItemMenu = ({
    title,
    imageUrl,
    size,
    history,
    match,
    linkUrl,
}) => (
    <div
        className={`${size} product`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

// With this, now we have access to 'history' property
export default withRouter(ProductItemMenu);
