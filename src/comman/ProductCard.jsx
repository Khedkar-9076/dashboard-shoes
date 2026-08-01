import { Link } from "react-router-dom";

function ProductCard(Props) {
  return (
    <>
     <Link to={"/product_det"}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 m-2">
        <img
          src={Props.data.product_img}
          alt="ABC"
          className="w-full h-56 object-cover"
        />
      
        <div className="p-4">
          <h3 className="font-semibold text-lg">{Props.data.product_name}</h3>

          <div className="flex items-center justify-between mt-2">
            <span className="text-blue-600 font-bold">{Props.data.price}</span>

            <span className="text-yellow-500">⭐</span>
          </div>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add To Cart
          </button>
          </div>
    
        </div>
      
      </Link>
    </>
  );
}

export default ProductCard;
