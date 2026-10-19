import Products from "../Products/Products";

const LatestProducts = ({ products }) => {

    const chunks = [];

    for (let i = 0; i < products.length; i += 4) {
        chunks.push(products.slice(i, i + 4));
    }

    return (
        <div className="space-y-4">
            {chunks.map((chunk, index) => (
                <Products key={index} products={chunk} />
            ))}
        </div>
    );
};

export default LatestProducts;