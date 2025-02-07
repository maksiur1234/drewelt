import React from "react";
import { Divider } from "@heroui/divider";

import LandingPageImage from "./LandingPage";
import SmallOffer from "./SmallOffer";
import WoodenBoard from "./WoodenBoard";
import SmallAbout from "./SmallAbout";
import Realizations from "./Realizations";

const HomePage = () => {
  return (
    <div className="w-full">
      <LandingPageImage />

      <SmallAbout />

      <WoodenBoard />

      <SmallOffer />

      <Divider className="my-12" />

      <Realizations />
    </div>
  );
};

export default HomePage;
