import { useState } from 'react'

import './ProductItem.css'
import Card from './Card'
import ProductDate from './ProductDate'

const ProductItem =(props) =>{

  // UseState returns 2 value which we need to store 1 is initial value 2nd is function
 const [tittle, setTitle]= useState(props.title);

  // let tittle =props.title;

  function clickHandler() {
    // tittle= "popcorn";
    setTitle("popcorn");
    console.log("button clicked");   
  }



     return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{tittle}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}
export default ProductItem;