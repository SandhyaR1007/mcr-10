import { useProductsContext } from "../context/ProductsContext";
import { departments } from "../utils/constants";

export const DepartmentFilter = () => {
  const {
    filters: { department },
    updateDepartment,
  } = useProductsContext();
  return (
    <select
      className="border rounded-md p-1 text-sm cursor-pointer"
      defaultValue={department}
      onChange={(e) => updateDepartment(e.target.value)}
    >
      {["All Departments", ...departments]?.map((data) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}
    </select>
  );
};

export const StockFilter = () => {
  const {
    filters: { isLowStock },
    updateIsLowStock,
  } = useProductsContext();
  return (
    <label className=" p-1 text-sm flex items-center gap-1 cursor-pointer">
      <input
        type="checkbox"
        checked={isLowStock}
        onChange={() => updateIsLowStock(!isLowStock)}
      />
      <span>Low Stock Items</span>
    </label>
  );
};

export const SortFilter = () => {
  const sortData = ["Name", "Price", "Stock"];
  const {
    filters: { sortBy },
    updateSortBy,
  } = useProductsContext();
  return (
    <select
      className="border rounded-md p-1 text-sm cursor-pointer"
      defaultValue={sortBy}
      onChange={(e) => updateSortBy(e.target.value)}
    >
      <option value="" disabled>
        Select
      </option>
      {sortData?.map((data) => (
        <option key={data} value={data.toLowerCase()}>
          {data}
        </option>
      ))}
    </select>
  );
};
