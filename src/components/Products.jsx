import {Link} from 'react-router-dom';
const Products=()=>{
    return(
        <div>
            <h1>product page</h1>
            <ul>
              <Link to='/products/1'><li>product1</li></Link>  
              <Link to='/products/2'><li>product2</li></Link> 
              <Link to='/products/3'><li>product3</li></Link> 
            </ul>
        </div>
    )
}
export default Products;