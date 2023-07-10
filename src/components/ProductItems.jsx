import React from 'react';
import {Link} from "react-router-dom";
import "../styles/ProductsItem.css"
const ProductsItems = ({id,name,price,image}) => {


    return (
        <div className='item-card'>
               <Link to={`/shop/${id}`}>
                  
               <img className='item-image' src={image} alt="Juice"/>
                  
                  </Link>
           
            <div>
                <h3>
                 {name}
                </h3>
                <p>
                  Price:  {price}
                </p>
                <Link to={`/shop/${id}`}>
                  <button>Buy it Now!</button>
                  </Link>
            </div> 
        </div>
    );
};
export default ProductsItems;