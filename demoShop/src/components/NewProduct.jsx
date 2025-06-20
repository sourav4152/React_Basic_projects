import './NewProduct.css'
import ProductForm from './ProductFrom'
function NewProduct(props) {

    function saveProduct(newProductInfo){
        console.log("i am inside new product");
        console.log(newProductInfo);
        //further sending data to parent
        props.printProduct(newProductInfo);
        
    }
    return(
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
        
    );
}

export default NewProduct;