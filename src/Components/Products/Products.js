import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../Assets/all-product.jpg";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../Home/ProductCard/ProductCard";
import Loading from "../Loading/Loading";

const Products = () => {
  const [products] = useProducts();
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-5"
      >
        <div className="lg:ml-28 py-10 ml-10 text-white">
          <h1 className="font-libreBasker font-medium text-6xl">
            All Products
          </h1>
          <h5 className="font-openSans text-xl font-medium py-5">
            Home
            <span className="font-montserrat font-light text-xl">
              / All Products
            </span>
          </h5>
        </div>
      </div>
      <div className="py-20">
        <div className="">
          <h2 className="text-5xl text-center font-bold text-gray-800">
            Our<span className="text-yellow-600"> Available Product</span>
          </h2>
        </div>
        {products?.length === 0 ? (
          <Loading></Loading>
        ) : (
          <>
            <div className="mt-20 lg:mx-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products?.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
            <div className="flex justify-center pt-16">
              <button
                className="btn btn-outline btn-warning px-20"
                onClick={() => navigate("/home")}
              >
                Back To Home
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
