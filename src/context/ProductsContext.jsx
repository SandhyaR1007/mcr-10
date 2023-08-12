import { createContext, useContext, useReducer } from "react";
import { actionTypes, initialState, productsReducer } from "./productsReducer";
import { useFilter } from "../utils/useFilter";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { filterByDepartment, filterByStock, sortByCategory } = useFilter();
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const dashboardAnalytics = state?.productsList.reduce(
    (acc, curr) => ({
      ...acc,
      total: acc?.total + Number(curr?.stock),
      delivered: acc?.delivered + Number(curr?.delivered),
      lowStock: curr?.stock <= 10 ? acc?.lowStock + 1 : acc?.lowStock,
    }),
    { total: 0, delivered: 0, lowStock: 0 }
  );
  console.log(dashboardAnalytics.total);
  const updateDepartment = (selectedDepartment) => {
    dispatch({
      type: actionTypes.FILTER_BY_DEPARTMENT,
      payload: selectedDepartment,
    });
  };

  const updateIsLowStock = (isLowStock) => {
    dispatch({
      type: actionTypes.FILTER_BY_STOCK,
      payload: isLowStock,
    });
  };

  const updateSortBy = (selectedCategory) => {
    dispatch({
      type: actionTypes.SORT,
      payload: selectedCategory,
    });
  };

  const addNewProduct = (productData) => {
    dispatch({
      type: actionTypes.ADD_NEW_PRODUCT,
      payload: [productData, ...state.productsList],
    });
  };

  const findProductById = (productId) =>
    state.productsList.find(({ id }) => Number(id) === Number(productId));

  let filteredProducts = filterByDepartment(
    state.productsList,
    state?.filters?.department
  );
  filteredProducts = filterByStock(
    filteredProducts,
    state?.filters?.isLowStock
  );
  filteredProducts = sortByCategory(filteredProducts, state?.filters?.sortBy);

  return (
    <ProductsContext.Provider
      value={{
        productsList: state.productsList,
        filters: state.filters,
        dashboardAnalytics,
        filteredProducts,
        updateDepartment,
        updateIsLowStock,
        updateSortBy,
        findProductById,
        addNewProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
