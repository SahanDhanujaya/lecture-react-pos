import Card from "../../components/Card"


const Products = () => {

    return (
        <div className="p-4 text-black bg-white scroll-smooth " id="products">
            <h1 className="text-2xl font-bold mt-4 text-center">Available Products</h1>
            <p className="text-center">Here you can find all the products available in our POS system.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 align-items-center justify-items-center">
                {
                    [1, 2, 3].map((product) => (
                        <div key={product} className="self-center">
                            <Card />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Products;