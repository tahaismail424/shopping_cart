import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopItem from './components/ShopItem';
import { itemInfo } from './Helper';
import cartImage from './components/assets/cart.png'


function Shop(props) {
    let initialCartList = {};
    if (!props.location.state) itemInfo.forEach(item => {
        initialCartList[item.name] = 0;
    });
    else initialCartList = props.location.state;

    let [cartItems, setCartItems] = useState(initialCartList);

    const addToCart = (e) => {
        const item = e.target.parentNode.id;
        let newCart = {...cartItems};
        newCart[item] = (cartItems[item]) ? cartItems[item] + 1 : 1; 
        setCartItems(newCart);
    }

    const toCart = () => {
        props.history.push({
            pathname: '/cart',
            state: cartItems
        })
    }

    return (
        <div>
            <div className='top-bar'>
                <Link 
                    to={{
                        pathname: '/',
                        state: cartItems
                    }}
                    className='top-bar-link'>Back to home</Link>
                <h3 className='top-bar-text'>Click to go to cart</h3>
                <button className='top-bar-button' onClick={toCart}>
                    <img src={cartImage} alt='cart'></img>
                    {Object.keys(cartItems).reduce(
                        (prev, cur) => {
                            let amount = (cartItems[cur]) ? cartItems[cur] : 0;
                            return prev + amount;
                        }, 0)}
                </button>
            </div>
            <div className='shop-list'>
                {itemInfo.map((item, index) => <ShopItem 
                    itemName={item.name} 
                    itemPic={item.pic} 
                    clickFunction={addToCart} 
                    itemPrice={item.price}
                    key={index}>  
                </ShopItem>)}
            </div>
            
        </div>
    )
}

export default Shop;
