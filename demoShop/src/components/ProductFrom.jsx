
import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value)
        // console.log(event.target.value);

    }

    function dateChangeHandler(event) {
        setDate(event.target.value)
        // console.log(event.target.value);
        // console.log(date);

    }


    //handling all inputs together
//     const [fullProductInput, setFullProductInput] = useState({
//     title: '',
//     date: ''
//   });

//   function ChangeHandler(event) {
//     const { name, value } = event.target;

//     setFullProductInput((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));

//     console.log({ ...fullProductInput, [name]: value }); // Optional: log updated object
//   }


    function submitHandler(event) {
        event.preventDefault();

        const productData= {
            title:newTitle,
            date:newDate
        };
        console.log(productData);
        
        //sending inputs data to parent
        props.onSaveProduct(productData);


        // to make the form empty
        setDate('');
        setTitle('');
        

    }

    return (
        <form  onSubmit={submitHandler}>
            <div className="new_product_title">
                <label htmlFor="">Title</label>
                <input type="text" value={newTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new_product_date" >
                <label htmlFor="">Date</label>
                <input type="date" value={newDate} min='2025-01-01' max='2025-12-12' onChange={dateChangeHandler} />
            </div >
            <div className="new_product_button">
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}
export default ProductForm;