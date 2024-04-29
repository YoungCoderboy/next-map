"use client";
import React from "react";
import { useRouter } from "next/navigation";

const MainPage: React.FC = () => {
  const router = useRouter();

  const redirectToMap = () => {
    router.push("/map");
  };

  const redirectToStatistics = () => {
    router.push("/statistics");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Main Page</h1>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={redirectToMap}
        >
          Go to heatmap
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={redirectToMap}
        >
          Go to Choropleth map
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={redirectToStatistics}
        >
          Go to Statistics
        </button>
      </div>
    </div>
  );
};

export default MainPage;
