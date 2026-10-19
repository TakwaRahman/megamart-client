const Products = ({ products }) => {
    const [first, second, third, fourth] = products || [];

    return (
        <div className="max-w-[1600px] mx-auto px-4 py-12 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* LEFT: বড় card */}
                {first && (
                    <div className="relative group overflow-hidden bg-gray-200 min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-8 md:p-12 text-center cursor-pointer">
                        <img
                            src={first.productImageUrl}
                            alt={first.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-500" />

                        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <img
                                    src={first.sellerImageUrl}
                                    alt={first.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="hover:text-accent text-white text-xs font-semibold drop-shadow-md">{first.sellerName}</p>
                        </div>


                        <div className="relative z-10 text-white space-y-2 max-w-xs mx-auto transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{first.title}</h3>
                            <p className="text-xs uppercase tracking-widest text-gray-300 font-light">{first.category || "Premium Collection"}</p>
                            <p className="text-sm font-medium tracking-wide">${first.minPrice} - ${first.maxPrice}</p>
                            <div className="pt-4">
                                <button className="w-full bg-white hover:bg-black text-black hover:text-white text-xs uppercase tracking-widest py-3 px-6 font-semibold transition-colors duration-300">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>



                )}

                {/* RIGHT: ৩টা ছোট card */}
                <div className="flex flex-col gap-4">

                    {/* Top: second card */}
                    {second && (
                        <div className="bg-[#f5f5f5] relative overflow-hidden group p-6 flex flex-col justify-center items-center h-[292px] cursor-pointer">
                            <img
                                src={second.productImageUrl}
                                alt={second.title}
                                className="w-auto h-70 object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
                            />
                            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img
                                        src={second.sellerImageUrl}
                                        alt={second.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="hover:text-accent text-white text-xs font-semibold drop-shadow-md">{second.sellerName}</p>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white space-y-1">
                                <h4 className="text-lg font-bold tracking-wide">{second.title}</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-300 font-light">{second.category || "Premium Collection"}</p>
                                <p className="text-sm font-medium">${second.minPrice} - ${second.maxPrice}</p>
                                <button className="mt-3 bg-white text-black text-xs uppercase tracking-wider py-2 px-4 font-semibold hover:bg-black hover:text-white transition-colors">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Bottom: third & fourth card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {third && (
                            <div className="bg-[#f5f5f5] relative overflow-hidden group p-6 flex flex-col justify-center items-center h-[292px] cursor-pointer">
                                <img
                                    src={third.productImageUrl}
                                    alt={third.title}
                                    className="w-auto h-44 object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
                                />

                                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                        <img
                                            src={third.sellerImageUrl}
                                            alt={third.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="hover:text-accent text-white text-xs font-semibold drop-shadow-md">{third.sellerName}</p>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white space-y-1">
                                    <h4 className="text-lg font-bold tracking-wide">{third.title}</h4>
                                    <p className="text-sm font-medium">${third.minPrice} - ${third.maxPrice}</p>
                                    <button className="mt-3 bg-white text-black text-xs uppercase tracking-wider py-2 px-4 font-semibold hover:bg-black hover:text-white transition-colors">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        )}

                        {fourth && (
                            <div className="bg-[#f5f5f5] relative overflow-hidden group p-6 flex flex-col justify-center items-center h-[292px] cursor-pointer">
                                <img
                                    src={fourth.productImageUrl}
                                    alt={fourth.title}
                                    className="w-auto h-44 object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
                                />

                                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                        <img
                                            src={fourth.sellerImageUrl}
                                            alt={fourth.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="hover:text-accent text-white text-xs font-semibold drop-shadow-md">{fourth.sellerName}</p>
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white space-y-1">
                                    <h4 className="text-lg font-bold tracking-wide">{fourth.title}</h4>
                                    <p className="text-sm font-medium">${fourth.minPrice} - ${fourth.maxPrice}</p>
                                    <button className="mt-3 bg-white text-black text-xs uppercase tracking-wider py-2 px-4 font-semibold hover:bg-black hover:text-white transition-colors">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;