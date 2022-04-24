import React from "react";
import Banner from "./Banner";
import DiscoverExperience from "./DiscoverExperience";
import FeaturedTrip from "./FeaturedTrip";
import GiftCard from "./GiftCard";
import Hosting from "./Hosting";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedTrip></FeaturedTrip>
      <DiscoverExperience></DiscoverExperience>
      <GiftCard></GiftCard>
      <Hosting></Hosting>
    </div>
  );
};

export default Home;
