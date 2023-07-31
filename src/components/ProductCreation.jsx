import React, {useState} from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URI;
const api = axios.create({
  baseURL: baseURL,
})

const ProductCreate = () => {

  //name, price, description
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleForSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription,
    }

  api.post('/product', newProduct)
    .then((response) => {
      console.log('Product created', response.data);
      setProductName('');
      setProductPrice('');
      setProductDescription('');
    })
    .catch((error) => {
      console.log('Error creating product', error);
    })
  }

  return(
    <div className="">
      <h2>Product Create Page</h2>
      <form action="" onSubmit={handleForSubmit}>
        <div className="">
          <label htmlFor="">Product Name</label>
          <input type="text" 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="">Product Price</label>
          <input type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="">Product Description</label>
          <input type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Create Product</button>
      </form>
    </div>
  )
};

export default ProductCreate;