import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDescription from './components/ProductDescription';
import ProductCreate from './components/ProductCreation';

function App() {
  return (
    <div className="App">
      <ProductListing />
      <ProductCreate />
    </div>
  );
}

export default App;
