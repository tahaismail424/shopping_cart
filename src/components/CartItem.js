import React from 'react';

function CartItem(props) {
    const { itemPic, itemName, updateCount, itemCount } = props;
    return (
        <div className={`${itemName} cart-item`}>
            <img src={itemPic} alt={itemName}></img>
            <h3 className='cart-item-text'>{itemName}</h3>
            <label htmlFor={`${itemName}-count`}>How many?</label>
            <input 
                id={`${itemName}-count`} 
                name={`${itemName}-count`} 
                type='number'
                className='cart-counter'
                onInput={updateCount}
                value={`${itemCount}`}
                min='0'></input>
        </div>
    )
}

export default CartItem;