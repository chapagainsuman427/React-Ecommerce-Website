import './App.css';
import React from 'react';
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductListing />
    </div>
  );
}

export default App;
