import "./App.css";
import etsy from "./data/etsy.json";
import Listing from "./components/Listing/Listing";

function App() {
  return (
    <Listing items={etsy}/>
  );
}

export default App;
