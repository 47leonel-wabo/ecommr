import React from "react";
import ProductDirectory from "../../components/productDirectory/ProductDirectory";

import "./homepage.styles.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <ProductDirectory />
        </div>
    );
};

export default HomePage;
