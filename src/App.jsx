import "./App.css";
import ScrollIndicator from "./component/ScrollIndicator";

function App() {
  return (
    <>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
