import React from 'react';
import { Link } from 'react-router-dom';
import PokeMart from './components/assets/pokemart.png';

function App(props) {
  return (
    <div>
      <img src={PokeMart} alt='pokemart-pic' className = 'pokemart' id='pokemart-1'></img>
      <img src={PokeMart} alt='pokemart-pic' className= 'pokemart' id='pokemart-2'></img>
      <div className='title-box'>
        <h1>Welcome to the PokéMart!</h1>
        <h2>For all your Pokémon battling needs</h2>
        <div className='to-inventory-button'>
          <Link 
            to={{
              pathname: '/shop',
              state: props.location.state
            }}
            className='shop-link'>See inventory</Link>
        </div>
      </div>
      <img src={PokeMart} alt='pokemart-pic' className = 'pokemart' id='pokemart-3'></img>
      <img src={PokeMart} alt='pokemart-pic' className = 'pokemart' id='pokemart-4'></img>
    </div>
  );
}

export default App;
