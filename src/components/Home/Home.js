import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (SelectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === SelectedItem._id);

        if(!exists){
            const newCart = [...cart, SelectedItem];
            setCart(newCart);
        }
        else {
            alert('Item All Ready Added');
        }
       
    }

    const handleRemovedFromCart = (SelectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== SelectedItem._id)
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt = {tShirt}
                        handleAddToCart = {handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                handleRemovedFromCart={handleRemovedFromCart}
                cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;