
import {juices} from '../juices/juices.js';
import ProductItems from "./ProductItems.jsx";

const Products = () => {
    return (
            <div>
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