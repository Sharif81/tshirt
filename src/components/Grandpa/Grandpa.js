import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (

        <RingContext.Provider value='Black Diamond Ring'>

            <div className='grandpa'>
                <h3>Grandpa</h3>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p>House: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>


    );
};

export default Grandpa;