import Prodcut from "./Prodcut";

const Prodcuts = ({ products }) => {


    return (
        <div>
            <div className="text-4xl font-bold text-center my-10">
                <h1>All Prodcuts</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
                {
                    products.map(product => <Prodcut key={product.id} product={product}></Prodcut>)
                }
            </div>
        </div>
    );
};

export default Prodcuts;