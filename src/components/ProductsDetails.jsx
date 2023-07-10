import React from 'react';
import {Link, useParams} from "react-router-dom";
import {juices} from '../juices/juices.js';
import '../styles/ProductDetails.css'
const ProductsDetails = () => {
    const {id} = useParams();
    const juice = juices.find(item => item.id == id);
    return (
        
            <div className='details'>
            
                    <img src={juice.image} alt="JuiceDetails"/>
                
                <div>
                    <h2>Product Info</h2>
                    <p> Name: </p>
                    <h3>
                      {juice.name}
                    </h3>
                    <p >
                    Ingredients: 
                    </p>
                    <p>
                    {juice.ingredients}
                    </p>
                    <p>
                      Price:  {juice.price}
                    </p>
                    <button>Buy</button>
                    <Link className='back-to' to="/shop">
                        <p>Click here to go back to Shop...</p>
                    </Link>
                </div>

            </div>
    
    );
};
export default ProductsDetails;