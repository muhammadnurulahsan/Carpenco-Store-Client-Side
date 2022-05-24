import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    _id,
    productName,
    price,
    minQuantity,
    aviQuantity,
    description,
    rating,
    img,
  } = product;
  return (
    <div className="card w-fit bg-stone-100 shadow-xl lg:mx-0 mx-10 font-montserrat">
      <figure className="px-10 pt-10">
        <img className="rounded-xl" src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name: {productName}</h2>
        <div className="flex items-center">
          <h2 className="card-title">Price: ${price}</h2>
          <div className="font-bold ml-10">
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            <FontAwesomeIcon
              className="mr-3 text-warning"
              icon={faStarHalfStroke}
            />
            {rating} (1,000+)
          </div>
        </div>
        <h2 className="card-title">Minimum Quantity: {minQuantity}</h2>
        <h2 className="card-title">Available Quantity: {aviQuantity}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center pt-5 w-full">
          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            className="btn btn-outline btn-warning px-16"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
