import React, { Component } from 'react';
import './AddProduct.css';
import CurrencyFormat from 'react-currency-format';
class CartItem extends Component {

    render() {
        return (
            <tr>
                <td>
                <center><img width="100px" height="100px;" src={"Image/"+this.props.item.image}></img></center>
                </td>
                <td>{this.props.item.title}</td>
                <td><CurrencyFormat className="formatmoney" thousandSeparator={true} value={this.props.item.price} />.VNĐ</td>
                <td><button onClick={this.props.onTang}>+</button>{this.props.item.quatity}<button onClick={this.props.onGiam}>-</button></td>
                <td><CurrencyFormat className="formatmoney" thousandSeparator={true} value={this.props.item.price * this.props.item.quatity} />.VNĐ</td>
                <td><button onClick={this.props.onDeleteClick}>Delete</button></td>
            </tr>

        );
    }
}
export default CartItem;