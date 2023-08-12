import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";

const ProductDetails = () => {
  const { findProductById } = useProductsContext();
  const { productId } = useParams();
  const productData = findProductById(productId);

  const excludeKeys = ["id", "imageUrl", "name", "price"];
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold">{productData?.name}</h1>
      <section>
        <img
          src={productData?.imageUrl}
          alt={productData.name}
          className="w-80 h-80"
        />
      </section>
      <p>
        <span className="py-1 pe-3 font-semibold text-lg"> Price:</span> $
        {productData?.price}
      </p>
      {Object?.entries(productData)
        .filter(([key]) => !excludeKeys.includes(key))
        .map(([key, value]) => (
          <p key={key}>
            <span className="py-1 pe-3 font-semibold text-lg">{key}:</span>
            <span className="p-1">{value}</span>
          </p>
        ))}
    </div>
  );
};

export default ProductDetails;
