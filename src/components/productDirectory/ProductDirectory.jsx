import React from "react";
import ProductItemMenu from "../productMenu/ProductItemMenu";
import "./productDirectory.style.scss";

class ProductDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    id: 1,
                    title: "Hats",
                    imageUrl:
                        "https://cdn.pixabay.com/photo/2016/11/14/04/57/woman-1822656_960_720.jpg",
                },
                {
                    id: 2,
                    title: "T-Shirts",
                    imageUrl:
                        "https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_960_720.jpg",
                },
                {
                    id: 3,
                    title: "Sneakers",
                    imageUrl:
                        "https://cdn.pixabay.com/photo/2017/04/18/17/09/hammock-2239788_960_720.jpg",
                },
                {
                    id: 4,
                    title: "Men",
                    size: "large",
                    imageUrl:
                        "https://cdn.pixabay.com/photo/2019/09/11/21/19/study-4469979_960_720.jpg",
                },
                {
                    id: 5,
                    title: "Women",
                    size: "large",
                    imageUrl:
                        "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg",
                },
            ],
        };
    }

    render() {
        return (
            <div className="root-card">
                {this.state.articles.map(({ id, title, imageUrl, size }) => (
                    <ProductItemMenu
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                ))}
            </div>
        );
    }
}

export default ProductDirectory;
