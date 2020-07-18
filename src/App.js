import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: "products"
    }
    

  }


  render() {
    return (
      <div>
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
          <Router>
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <Link to="/products" class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Products</Link>
              </li>
              <li class="nav-item">
                <Link to="/addProduct" class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Add Product</Link>
              </li>
              <li class="nav-item">
                <Link to="/cart" class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Cart</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/addProduct">
                <AddProduct />
              </Route>
              <Route path="/cart">
                <Cart/>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
