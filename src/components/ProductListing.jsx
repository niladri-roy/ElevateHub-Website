import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URI;
const api = axios.create({
  baseURL: baseURL,
});

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/product')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products: ', error);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    api.delete(`/product/${id}`)
      .then((res) => {
        console.log('Product deleted', res.data);
        // setProducts(products.filter((product) => product._id !== id));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
  });
}

  return (
    <div>
      <h2>Product Listing Page</h2>
      <ul>
        {products.map((product) => (
          // Add a unique "key" prop to the <li> element
          <li key={product._id}>
            <p>Product Id: {product._id}</p>
            <h3>Product Name: {product.name}</h3>
            <h5>Product Price: {product.price}</h5>
            <h5>Product Description: {product.description}</h5>
            <button onClick={() => handleDeleteProduct(product._id)}>Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
