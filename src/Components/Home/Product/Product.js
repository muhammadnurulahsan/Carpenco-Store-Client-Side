import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import Loading from "./../../Loading/Loading";
import useProducts from "../../../Hooks/useProducts";

const Product = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  return (
    <div className="py-20">
      <div className="">
        <h2 className="text-5xl text-center font-bold text-gray-800">
          Our<span className="text-yellow-600"> Available Product</span>
        </h2>
      </div>
      {products.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="mt-20 lg:mx-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
          <div className="flex justify-center pt-16">
            <button
              className="btn btn-outline btn-warning px-20"
              onClick={() => navigate("/products")}
            >
              See All Products
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
