import { Link, useLocation } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { columns } from "../utils/constants";
import { DepartmentFilter, SortFilter, StockFilter } from "../components";
import { useEffect } from "react";

const transformData = (key, data) => {
  if (key === "imageUrl") {
    return <img className="w-24 h-24" src={data[key]} alt={data?.name} />;
  } else if (key === "name") {
    return (
      <Link
        to={`/productDetails/${data.id}`}
        className="text-blue-600 underline"
      >
        {data[key]}
      </Link>
    );
  } else if (key === "price") {
    return <span>${data[key]}</span>;
  }
  return <span>{data[key]}</span>;
};

const Products = () => {
  const { filteredProducts, updateDepartment } = useProductsContext();
  const location = useLocation();
  useEffect(() => {
    if (location?.state?.department) {
      updateDepartment(location?.state?.department);
    }
  }, []);

  return (
    <div className="py-3">
      <nav className="py-3 flex items-center gap-2 justify-between pe-5">
        <h1 className="text-lg font-bold">Products</h1>
        <DepartmentFilter />
        <StockFilter />
        <SortFilter />
        <button className="bg-blue-500 text-white px-5 py-1 rounded-sm">
          <Link to="/addNewProduct">New</Link>
        </button>
      </nav>
      <table className="border rounded-md">
        <thead>
          <tr className="bg-gray-200 py-3">
            {columns.map(({ name }) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredProducts?.map((data) => (
            <tr key={data.id} className="px-2 py-4 border-b">
              {columns.map(({ key }) => (
                <td className="px-5" key={key}>
                  {transformData(key, data)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
