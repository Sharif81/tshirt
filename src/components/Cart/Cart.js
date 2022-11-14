import React from 'react';

const Cart = ({cart, handleRemovedFromCart}) => {
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}  
                     <button onClick={() => handleRemovedFromCart(tShirt)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;