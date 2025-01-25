import React from "react";
import LandingPageImage from "./LandingPage";
import SmallOffer from "./SmallOffer";
import {Divider} from "@heroui/divider";
import WoodenBoard from "./WoodenBoard";
import SmallAbout from "./SmallAbout";
import Realizations from "./Realizations";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
        <LandingPageImage />
        <SmallOffer />

        <Divider className="my-12" />

        <Realizations />
        <SmallAbout />
        <WoodenBoard />
    </div>
  );
};

export default HomePage;