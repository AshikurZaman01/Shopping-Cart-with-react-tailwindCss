
const Prodcut = ({ product }) => {

    const { product_name, product_image, product_price, product_details } = product || {};

    return (
        <div className="mx-auto shadow-md shadow-gray-500">

            <div className="w-[250px] h-[200px] sm:w-[280px] md:[310px] ring-4 rounded-md">
                <img className="w-full h-full rounded-md" src={product_image} alt="" />
            </div>

            <div>
                <h1>{product_name}</h1>
                <p>{product_price}</p>
            </div>
        </div>
    );
};

export default Prodcut;