import { useState } from "react";
import Prodcuts from "../Products/Prodcuts";
import { useEffect } from "react";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return (
        <div>
            <div>
                <Prodcuts products={products}></Prodcuts>
            </div>
        </div>
    );
};

export default Home;