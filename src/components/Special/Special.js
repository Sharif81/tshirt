import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const blackRing = useContext(RingContext)
    return (
        <div>
            <p>Special Person</p>
            <p>Gift from Grandpa : {blackRing}</p>
        </div>
    );
};

export default Special;