import { createContext, useContext, useReducer } from "react";
import { initialState, productsReducer } from "./productsReducer";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const dashboardAnalytics = state.productsList.reduce(
    (acc, curr) => ({
      ...acc,
      total: acc.total + curr.stock,
      delivered: acc?.delivered + curr?.delivered,
      lowStock: curr?.stock <= 10 ? acc?.lowStock + 1 : acc?.lowStock,
    }),
    { total: 0, delivered: 0, lowStock: 0 }
  );
  return (
    <ProductsContext.Provider value={{ dashboardAnalytics }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
