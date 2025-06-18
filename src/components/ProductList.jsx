import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isDarkMode = true;
  useEffect(() => {
    const getProductList = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    };
    getProductList();
  }, []);

  return (
    <div
      className={`p-6 min-h-screen transition-colors ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {loading && <p>Loading Products...</p>}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`p-4 rounded-lg shadow-md transition ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
