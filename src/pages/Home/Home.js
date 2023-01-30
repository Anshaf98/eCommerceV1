import React from "react";
import Banner from "../../components/Banner/Banner";
import Explore from "../../components/Explore/Explore";
import AppleLatest from "../../components/Latest/AppleLatest";
import Socials from "../../components/Socials.js/Socials";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Banner />
      <AppleLatest />
      <Explore />
      <Socials />
      <Subscribe />
    </>
  );
};

export default Home;
