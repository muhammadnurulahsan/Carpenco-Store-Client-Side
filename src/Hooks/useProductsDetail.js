import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductsDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios
      .get(`https://carpenco-store.herokuapp.com/products/${id}`)
      .then((data) => setProducts(data.data));
  }, [id, products, setProducts]);
  return [products, id];
};

export default useProductsDetail;
