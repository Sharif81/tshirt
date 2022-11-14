import { useEffect, useState } from "react"

const useTShirts = () => {
    const[tShirts, setTShirts] = useState([]);
    useEffect( () => {
        fetch('tshirts.json')
        .then(response => response.json())
        .then(data => setTShirts(data))

    }, []);
    return [tShirts, setTShirts];
}

export default useTShirts;