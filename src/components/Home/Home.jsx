import { useEffect, useState } from "react";
import LatestProducts from "../LatestProducts/LatestProducts";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/latest-products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <LatestProducts products={products} />
        </div>
    );
};

export default Home;