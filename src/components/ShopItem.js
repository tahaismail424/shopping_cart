import React from 'react';
import { toWords } from '../Helper';

function ShopItem(props) {

    const { itemName, itemPic, clickFunction } = props;
    return (
        <div id={itemName} className='shop-item'>
            <img src={itemPic} alt={itemName} className='item-pic'></img>
            <h4>{toWords(itemName)}</h4>
            <button onClick={clickFunction} className='item-button'>Add to cart</button>
          
        </div>
    )
}

export default ShopItem;
