import React from "react";
import Listing from "./components/Listing/Listing.tsx";
import etsy from "./data/etsy.json";
import "./App.css";


function App() {
  return (
    <Listing items = {etsy} />
  );
}

export default App;
