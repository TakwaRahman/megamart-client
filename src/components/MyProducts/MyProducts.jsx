import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import MyProduct from "./MyProduct";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!user?.email || !token) return;

        fetch(`http://localhost:3000/myProducts/${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Unauthorized or failed request");
                }
                return res.json();
            })
            .then(data => {
                console.log("My Products:", data);
                setMyProducts(data);
            })
            .catch(err => {
                console.log(err.message);
            });

    }, [user]);

    const chunks = [];

    for (let i = 0; i < myProducts.length; i += 4) {
        chunks.push(myProducts.slice(i, i + 4));
    }

    return (
        <div className="space-y-4">
            {chunks.map((chunk, index) => (
                <MyProduct key={index} myProducts={chunk} />
            ))}
        </div>
    );
};

export default MyProducts;