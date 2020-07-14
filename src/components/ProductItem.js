import React, { Component } from 'react';
import './AddProduct.css';
import CurrencyFormat from 'react-currency-format';

class ProductItem extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
                
                <center><h3>{this.props.item.title}</h3></center>
                <p><CurrencyFormat className="formatmoney" thousandSeparator={true} value={this.props.item.price} />.VNĐ</p>
                <center><img width="200px" height="200px;" src={"Image/" + this.props.item.image}></img></center>
                <center><button class="btn btn-success" onClick={this.props.onItemClick}>Add</button></center>
            </div>

        );
    }
}

export default ProductItem;