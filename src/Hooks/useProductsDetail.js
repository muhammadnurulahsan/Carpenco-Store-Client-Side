import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductsDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id, products, setProducts]);
  return [products, id];
};

export default useProductsDetail;
