
import {juices} from '../juices/juices.js';
import ProductItems from "./ProductItems.jsx";
import '../styles/Products.css'
const Products = () => {
    return (
            <div className="container">
                {juices.map(({id,name,ingredients,price,image}) =>
                    <ProductItems
                        key={id}
                        id={id}
                        name={name}
                        ingredients={ingredients}
                        price={price}
                        image={image}
                    />
                )}
            </div>
    );
};
export default Products;