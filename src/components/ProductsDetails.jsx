import React from 'react';
import {Link, useParams} from "react-router-dom";
import {juices} from '../juices/juices.js';

const ProductsDetails = () => {
    const {id} = useParams();
    const juice = juices.find(item => item.id == id);
    return (
        
            <div>
                <div>
                    <h3>
                      Name:  {juice.name}
                    </h3>
                    <p >
                    Ingredients:  {juice.ingredients}
                    </p>
                    <span>
                      Price  {juice.price}
                    </span>
                    <button>Buy</button>
                    <Link to="/shop">
                        Back to Shop
                    </Link>
                </div>
                <div>
                    <img src={juice.image} alt="JuiceDetails"/>
                </div>
            </div>
    
    );
};
export default ProductsDetails;