import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { itemInfo } from './Helper';
import CartItem from './components/CartItem';

function Cart(props) {
    let [cartItems, setCartItems] = useState(props.location.state);

    const changeCartCount = (e) => {
        const currentCount = parseInt(e.target.value);
        const item = e.target.parentNode.classList.item(0);
        let newCart = {...cartItems};
        newCart[item] = currentCount;
        setCartItems(newCart);
    }

    return (
        <div>
            <h2>Your cart</h2>
            <Link to={{
                pathname: '/shop',
                state: cartItems}}>Back to shop</Link>
                {itemInfo.map((item, index) => {
                    if (cartItems[item.name] !== 0) return (
                        <CartItem 
                            itemPic={item.pic}
                            itemName={item.name}
                            updateCount={changeCartCount}
                            itemCount={cartItems[item.name]}
                            key={index}> 
                        </CartItem>
                        );
                    else return null;
                    })}
            <h3>Total cost: ₽{Object.keys(cartItems).reduce(
                (prev, cur, index) => {
                    let amount = (cartItems[cur]) ? cartItems[cur] : 0;
                    return prev + amount * itemInfo[index].price;
                }, 0)}</h3>
            <button 
                className='checkout-button' 
                >Checkout?</button>
        </div>
    )
}

export default Cart;
