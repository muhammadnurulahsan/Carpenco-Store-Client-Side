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
    <div class="card w-fit bg-base-100 shadow-xl lg:mx-0 mx-10 font-montserrat">
      <figure>
        <img className="h-full w-full" src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Product Name: {productName}</h2>
        <div className="flex items-center">
          <h2 class="card-title">Price: ${price}</h2>
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
        <h2 class="card-title">Minimum Quantity: {minQuantity}</h2>
        <h2 class="card-title">Available Quantity: {aviQuantity}</h2>
        <p>{description}</p>
        <div class="card-actions justify-center pt-5 w-full">
          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            class="btn btn-outline btn-warning px-16"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
