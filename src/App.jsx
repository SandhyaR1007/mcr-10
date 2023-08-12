import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Departments,
  NewProduct,
  ProductDetails,
  Products,
} from "./pages";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex gap-3 ">
      <aside className="w-[15vw] bg-neutral-900 h-screen">
        <Sidebar />
      </aside>
      <main className="w-[85vw] px-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/addNewProduct" element={<NewProduct />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
