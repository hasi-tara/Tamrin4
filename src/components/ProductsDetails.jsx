import { useParams } from "react-router-dom";
const ProductsDetails=()=>{
    const params=useParams();
    return(
        <div>
            <h1>product dtails</h1>
            <h3>product {params.id}</h3>
        </div>
    )
}
export default ProductsDetails;