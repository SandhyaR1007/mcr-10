import { useEffect, useState } from "react";
import { departments } from "../utils/constants";
import { useProductsContext } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [newProductData, setNewProductData] = useState(
    localStorage.getItem("newProductData")
      ? JSON.parse(localStorage.getItem("newProductData"))
      : {
          id: Date.now(),
          department: "",
          name: "",
          description: "",
          price: 0,
          stock: 0,
          sku: "",
          supplier: "",
          delivered: 0,
          imageUrl: "",
        }
  );
  const { addNewProduct } = useProductsContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(newProductData);
    navigate("/products");
  };
  const handleInputChange = (e) => {
    setNewProductData((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const id = setTimeout(() => {
      localStorage.setItem("newProductData", JSON.stringify(newProductData));
    }, 200);

    return () => {
      clearTimeout(id);
      localStorage.removeItem("newProductData");
    };
  }, [newProductData]);

  return (
    <div className="p-3">
      <h1 className="text-lg font-bold p-1.5">Add New Product</h1>
      <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1">
          <span>
            Department: <span className="text-red-500 font-semibold">*</span>
          </span>
          <select
            required
            name="department"
            className="border p-1.5 rounded-md md:w-[50%]"
            defaultValue={newProductData?.department}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Department
            </option>
            {departments.map((data) => (
              <option value={data} key={data}>
                {data}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span>
            Name: <span className="text-red-500 font-semibold">*</span>
          </span>
          <input
            required
            value={newProductData?.name}
            type="text"
            name="name"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>
            Description: <span className="text-red-500 font-semibold">*</span>
          </span>
          <input
            required
            value={newProductData?.description}
            type="text"
            name="description"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>
            Price: <span className="text-red-500 font-semibold">*</span>
          </span>
          <input
            required
            value={newProductData?.price}
            type="number"
            name="price"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Stock:</span>
          <input
            value={newProductData?.stock}
            type="number"
            name="stock"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>SKU:</span>
          <input
            value={newProductData?.sku}
            type="text"
            name="sku"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>
            Supplier: <span className="text-red-500 font-semibold">*</span>
          </span>
          <input
            required
            value={newProductData?.supplier}
            type="text"
            name="supplier"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Delivered:</span>
          <input
            value={newProductData?.delivered}
            type="number"
            name="delivered"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>
            Image Url: <span className="text-red-500 font-semibold">*</span>
          </span>
          <input
            required
            value={newProductData?.imageUrl}
            type="url"
            name="imageUrl"
            className="border p-1.5 rounded-md md:w-[50%]"
            onChange={handleInputChange}
          />
        </label>
        <button
          className="self-start bg-blue-500 px-5 py-1 text-white rounded-md"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
