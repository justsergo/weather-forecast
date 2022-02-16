import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemWeather from "../components/ItemWeather";

const Content = () => {
  return (
    <Routes>
      <Route path="/:city/*" element={<ItemWeather />} />
    </Routes>
  );
};

export default Content;
