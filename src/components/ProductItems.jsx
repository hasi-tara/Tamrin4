import React from 'react';
import {Link} from "react-router-dom";

const ProductsItems = ({id,name,price,image}) => {


    return (
        <div className="product-details">
            <img src={image} alt="Juice"/>
            <div>
                <h3>
                  Name:  {name}
                </h3>
                <p>
                  Price:  {price}
                </p>
                <Link to={`/shop/${id}`}>Buy it Now!</Link>
            </div> 
        </div>
    );
};
export default ProductsItems;