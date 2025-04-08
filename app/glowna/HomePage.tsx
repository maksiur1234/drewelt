import React from "react";
import { Divider } from "@heroui/divider";

import LandingPageImage from "./LandingPage";
import SmallOffer from "./SmallOffer";
import Products from "./Products";
import SmallAbout from "./SmallAbout";
import Realizations from "./Realizations";

import GoogleMaps from "@/components/googleMaps";

const HomePage = () => {
  return (
    <div className="">
      <LandingPageImage />

      <SmallAbout />

      <Products />

      {/* <SmallOffer /> */}

      <Divider className="my-12" />

      <Realizations />

      <GoogleMaps />
    </div>
  );
};

export default HomePage;
