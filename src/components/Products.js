import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './AddProduct.css';

class Products extends Component {
    constructor() {
        super();
        var products = JSON.parse(localStorage.getItem("lsc-products"));
        this.state = {
            products: products,
        }
        if (!this.products) {
            this.products = [];
        }
        this.SortByPriceAsc = this.SortByPriceAsc.bind(this);
        this.SortByPriceDsc = this.SortByPriceDsc.bind(this);
    }
    SortByPriceAsc() {

        let sortedProductsAsc;
        sortedProductsAsc = this.state.products.sort((a, b) => {
            return parseInt(a.price) - parseInt(b.price);
        })

        this.setState({
            products: sortedProductsAsc
        })
    }
    SortByPriceDsc(){
        let sortedProductsDsc;
        sortedProductsDsc = this.state.products.sort((a, b) => {
            return parseInt(b.price) - parseInt(a.price);
        })

        this.setState({
            products: sortedProductsDsc
        })
    }
    onItemClick(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (!cart) {
                cart = [];
            }
            //KT xem item da ton tai trong cart hay chua
            let oldItem = cart.find((element) => element.title === item.title);
            if (oldItem) {
                oldItem.quatity += 1;
            } else {
                item.quatity = 1;
                cart.push(item);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Successfull");
            console.log(cart);
        }
    }
    render() {
        return (
            <div>
                <div>
                    <i class="fas fa-sort-amount-down" onClick={this.SortByPriceDsc} ></i>&emsp;
                    <i class="fas fa-sort-amount-up" onClick={this.SortByPriceAsc}></i>&emsp;
                    <input type="text" name="search" placeholder="Moi ban nhap!"></input>&emsp;<i class="fas fa-search" ></i>
                </div>
                <br/>
                <div className="products">

                    {this.state.products.map((item, index) =>
                        <ProductItem onItemClick={this.onItemClick(item)} item={item} />)
                    }

                </div>
            </div>
        );
    }
}
export default Products;
