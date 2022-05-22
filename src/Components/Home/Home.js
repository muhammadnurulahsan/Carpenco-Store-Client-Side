import React from "react";
import Banner from "./Banner/Banner";
import BusinessPartner from "./BusinessPartner/BusinessPartner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Counter from "./Counter/Counter";
import Plan from "./Plan/Plan";
import Product from "./Product/Product";
import Review from "./Review/Review";
import SubscribeCard from "./SubscribeCard/SubscribeCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <Product />
      <Plan />
      <Review />
      <BusinessPartner />
      <SubscribeCard />
      <BusinessSummary />
      <Counter />
    </div>
  );
};

export default Home;
