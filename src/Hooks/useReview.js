import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://carpenco-store.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);
  return [reviews, setReviews];
};

export default useReview;
