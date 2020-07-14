import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Product from './components/Products';
import Cart from './components/Cart';
class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: "products"
    }
    this.onProductsClicked = this.onProductsClicked.bind(this);
    this.onAddProductsClicked = this.onAddProductsClicked.bind(this);
    this.onCartClicked = this.onCartClicked.bind(this);
    
  }
  
  onProductsClicked() {
    this.setState({
      menu: "products"
    })
  }

  onAddProductsClicked() {
    this.setState({
      menu: "add-product"
    })
  }
  onCartClicked() {
    this.setState({
      menu: "cart"
    })
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
        <div className="Menu">
          <button className="bt" onClick={this.onProductsClicked}>Products</button>
          <button className="bt" onClick={this.onAddProductsClicked}>Add Product</button>
          <button className="bt" onClick={this.onCartClicked}>Cart</button>
         
          
        </div>
        <br />
        <hr />
        <br />
        {this.state.menu === "products" ? <Product /> : null}
        {this.state.menu === "add-product" ? <AddProduct /> : null}
        {this.state.menu === "cart" ? <Cart /> : null}

      </div>
    );
  }
}

export default App;
