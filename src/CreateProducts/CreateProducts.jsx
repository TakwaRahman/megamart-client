

const CreateProducts = () => {

    const handleCreateProducts = async (e) => {
        e.preventDefault();
        const form = e.target;

        const createProducts = {
            title: form.title.value,
            category: form.category.value,
            minPrice: parseFloat(form.minPrice.value),
            maxPrice: parseFloat(form.maxPrice.value || form.minPrice.value),
            condition: form.condition.value,
            productUsageTime: form.productUsageTime.value,
            productImageUrl: form.productImageUrl.value,
            sellerName: form.sellerName.value,
            sellerEmail: form.sellerEmail.value,
            sellerContact: form.sellerContact.value,
            sellerImageUrl: form.sellerImageUrl.value,
            location: form.location.value,
            description: form.description.value,
            // ফর্মে ইউজার যে ডেট সিলেক্ট করবে সেটি ধরবে, ফর্মে ফিল্ড না রাখলে সরাসরি new Date().toISOString() ব্যবহার করতে পারেন
            createdAt: form.createdAt.value || new Date().toISOString()
        };

        console.log(createProducts);

        const res = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createProducts)
        });

        const data = await res.json();
        console.log(data);

        if (data.insertedId) {
            form.reset()
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            {/* Back to Products Button */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 text-sm font-semibold self-start max-w-4xl mx-auto w-full">
                <span>←</span> Back To Products
            </button>

            {/* Main Container */}
            <div className="w-full max-w-4xl bg-white rounded-lg p-6 md:p-10 border border-dashed border-blue-400 shadow-sm">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-8">
                    Create <span className="text-purple-600">A Product</span>
                </h1>

                <form className="space-y-5" onSubmit={handleCreateProducts}>
                    {/* Row 1: Title & Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Title</label>
                            <input
                                type="text"
                                placeholder="e.g. Yamaha Fz Guitar for Sale"
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="title"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Category</label>
                            <select name="category"
                                className="select select-bordered w-full font-normal text-gray-400 focus:outline-purple-500"
                                defaultValue=""
                            >
                                <option value="" disabled>Select a Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="musical-instruments">Musical Instruments</option>
                                <option value="fashion">Fashion</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 2: Min Price & Max Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Min Price You want to Sale ($)</label>
                            <input
                                type="text"
                                placeholder="e.g. 18.5"
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="minPrice"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Max Price You want to Sale ($)</label>
                            <input
                                type="text"
                                placeholder="Optional (default = Min Price)"
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="maxPrice"
                            />
                        </div>
                    </div>

                    {/* Row 3: Product Condition & Usage Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Product Condition</label>
                            <div className="flex gap-6 h-[3rem] items-center">
                                <label className="label cursor-pointer justify-start gap-2">
                                    <input
                                        type="radio"
                                        name="condition"
                                        value='brandNew'
                                        className="radio radio-primary border-2 checked:bg-purple-600 checked:border-purple-600"
                                        defaultChecked
                                    />
                                    <span className="label-text font-medium text-slate-700">Brand New</span>
                                </label>
                                <label className="label cursor-pointer justify-start gap-2">
                                    <input
                                        type="radio"
                                        name="condition"
                                        value="used"
                                        className="radio radio-primary border-2 checked:bg-purple-600 checked:border-purple-600"
                                    />
                                    <span className="label-text font-medium text-slate-700">Used</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Product Usage time</label>
                            <input
                                type="text"
                                placeholder="e.g. 1 year 3 month"
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="productUsageTime"
                            />
                        </div>
                    </div>

                    {/* NEW ROW: Product Image URL & Created At Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Your Product Image URL</label>
                            <input
                                type="url"
                                placeholder="https://..."
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="productImageUrl"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Product Upload Date (Created At)</label>
                            <input
                                type="date"
                                // আজ we are automatically setting today's date as default value
                                defaultValue={new Date().toISOString().split('T')[0]}
                                className="input input-bordered w-full focus:outline-purple-500 text-gray-600"
                                name="createdAt"
                            />
                        </div>
                    </div>

                    {/* Row 5: Seller Name & Seller Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Seller Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Artisan Roasters"
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="sellerName"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Seller Email</label>
                            <input
                                type="email"
                                
                                className="input input-bordered w-full bg-white text-gray-500 focus:outline-purple-500"
                                name="sellerEmail"
                            />
                        </div>
                    </div>

                    {/* Row 6: Seller Contact & Seller Image URL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Seller Contact</label>
                            <input
                                type="text"
                                placeholder="e.g. +1-555-1234"
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="sellerContact"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-semibold text-slate-700 text-sm">Seller Image URL</label>
                            <input
                                type="url"
                                placeholder="https://..."
                                className="input input-bordered w-full focus:outline-purple-500"
                                name="sellerImageUrl"
                            />
                        </div>
                    </div>

                    {/* Row 7: Location */}
                    <div className="form-control w-full">
                        <label className="label font-semibold text-slate-700 text-sm">Location</label>
                        <input
                            type="text"
                            placeholder="City, Country"
                            className="input input-bordered w-full focus:outline-purple-500"
                            name="location"
                        />
                    </div>

                    {/* Row 8: Simple Description */}
                    <div className="form-control w-full">
                        <label className="label font-semibold text-slate-700 text-sm">Simple Description about your Product</label>
                        <textarea
                            name="description"
                            placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                            className="textarea textarea-bordered w-full h-28 focus:outline-purple-500 text-base"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="btn w-full bg-purple-600 hover:bg-purple-700 text-white normal-case text-base border-none font-bold"
                        >
                            Create A Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProducts;