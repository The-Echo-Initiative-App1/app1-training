import React, {useState} from 'react'
function MyComponent(){
    const [name,setName]=useState("guest")
    const[quantity, setQuantity]= useState(1);
    const[comment, setComment]= useState("");
    const [payment, setPayment]= useState("");
    const [shipping, setShipping]=useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange} type='number'></input>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder='enter delivery instructions'></textarea>
            <p>comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">select an option</option>
                <option value="Visa">Visa</option>
                <option value="mastercard">mastercard</option>
                <option value="giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type='radio' value="pick Up" checked={shipping==="pick Up"} onChange={handleShippingChange}></input>
                
                Pick Up
            </label><br/>
            <label>
                <input type='radio' value="pdelivery" checked={shipping==="pdelivery"} onChange={handleShippingChange}></input>
                Delivery
            </label>
            <p>shipping: {shipping}</p>
        </div>
    )
}
export default MyComponent