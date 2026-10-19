import { useEffect, useState } from "react";
import Products from "../Products/Products";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const chunks = [];

    for (let i = 0; i < products.length; i += 4) {
        chunks.push(products.slice(i, i + 4));
    }

    return (
        <div className="space-y-4">
            {chunks.map((chunk, index) => (
                <Products
                    key={index}
                    products={chunk}
                />
            ))}
        </div>
    );
};

export default AllProducts;