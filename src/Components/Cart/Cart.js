import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = (cart.reduce((totalPrice, course) => totalPrice + course.price,0)).toFixed(2);
    let shippingCost = 10.25;
    if(totalPrice > 35)
    {
        shippingCost = 0;
    }
    else if(totalPrice > 15)
    {
        shippingCost = 4.15;
    }
    else
    {
        shippingCost = 10.25;
    }

    const tax = (totalPrice/5).toFixed(2);
    const grandTotal = (Number(totalPrice) + shippingCost + Number(tax)).toFixed(2);
    return (
        <div className="cart p-4">
            <h1>Cart</h1>
            <h5>You have ordered : {cart.length} course</h5>
            <p>Price : ${totalPrice}</p>
            <p>Shipping Cost : ${shippingCost}</p>
            <p>Tax + VAT (5%) : ${tax}</p>
            <p>Total Price : ${grandTotal}</p>
        </div>
    );
};

export default Cart;