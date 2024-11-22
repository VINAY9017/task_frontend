import Analytics from "./Pages/Analytics";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./Pages/Product/AddProduct";
import EditProduct from "./Pages/Product/EditProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
