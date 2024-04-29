"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Card from "../components/card";

const MainPage: React.FC = () => {
  const router = useRouter();

  const redirectToMap = () => {
    router.push("/map");
  };

  const redirectToStatistics = () => {
    router.push("/statistics");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('https://t4.ftcdn.net/jpg/03/73/32/17/360_F_373321767_FvsKtnjUajjjOTq1a87aXWIoRepUC40I.jpg')] bg-no-repeat bg-cover">
      <h1 className="text-7xl font-mono font-bold mb-8 text-black">
        Main Page
      </h1>
      <div className="space-x-4">
        <div className="flex flex-row m-5">
          <Card
            image="./heatmap.jpg"
            heading="Heat Map"
            alink="./map"
            description="A heatmap is a graphical representation of data where values are depicted by color."
          />
          <Card
            image="./cmap.png"
            heading="Choropleth Map"
            alink="./cmap"
            description="A thematic map in which areas are shaded or patterned in proportion to the measurement of some statistical variable, using geographic boundaries"
          />
          <Card
            image="./stats.png"
            heading="Statistics"
            alink="./statistics"
            description="statistics concluded from the crime data."
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
