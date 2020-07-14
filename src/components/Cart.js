import React, { Component } from 'react';
import CartItem from './CartItem';
import CurrencyFormat from 'react-currency-format';
import './AddProduct.css';
class Cart extends Component {
    constructor() {
        super();
        //this.cart = JSON.parse(localStorage.getItem("cart"));
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart"))
        }
        //console.log(this.cart)
    }
    Total() {
        let sum = 0;
        let { cart } = this.state;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].price * cart[i].quatity;
        }
        return sum;
    }
    onDeleteClick(key) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.splice(key, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
            this.setState({
                cart: JSON.parse(localStorage.getItem("cart"))
            });
        }
    }



    onTang(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let oldItem = cart.find((element) => element.title === item.title);
            oldItem.quatity += 1
            localStorage.setItem('cart', JSON.stringify(cart));

            this.setState({
                cart: cart,
            })
        }
    }

    onGiam(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let oldItem = cart.find((element) => element.title === item.title);
            if (oldItem.quatity > 1) {
                oldItem.quatity -= 1
                localStorage.setItem('cart', JSON.stringify(cart));
                this.setState({
                    cart: cart,
                })
            }
            else {
                let cart = JSON.parse(localStorage.getItem('cart'));
                cart.splice(item, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                console.log(cart);
                this.setState({
                    cart: cart,
                });
            }
        }
    }
    render() {
        return (
            <table border="1">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Provisional</th>
                    <th>Delete</th>

                </tr>
                {this.state.cart.map((item, id) =>
                    <CartItem
                        item={item}
                        key={id}
                        onDeleteClick={this.onDeleteClick(id)}
                        onTang={this.onTang(item)}
                        onGiam={this.onGiam(item)}
                    />)
                }
                <td><CurrencyFormat className="formatmoney" thousandSeparator={true} prefix={'Total: '} value={this.Total()} />.VNĐ</td>
            </table>


        );
    }
}
export default Cart;