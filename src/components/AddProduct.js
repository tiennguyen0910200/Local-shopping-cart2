import React, { Component } from 'react';


class AddProduct extends Component {

    onAddProduct(event) {
        event.preventDefault();
        let title = event.target["title"].value;
        let price = event.target["price"].value;
        let image = event.target["image"].files.item(0).name;
        let products = JSON.parse(localStorage.getItem("lsc-products"));
        if (!products) {
            products = [];
        }
        let oldItem = products.find((element) => element.title === title);
        if (oldItem) {
            alert("Đồ Ngốc :)");
        }
        else {
            let product = {
                title: title,
                price: price,
                image: image
            }

            products.push(product);
            localStorage.setItem("lsc-products", JSON.stringify(products));
            alert("Successfull");
            console.log(products);
        }
    }
    render() {
        return (
            <div>
                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

                <form onSubmit={this.onAddProduct}>
                    <input type="text" required name="title" placeholder="title" />
                    <input type="text" required name="price" placeholder="price" />
                    <input type="file" required name="image" placeholder="image" />
                    <button class="btn btn-info" type="submit" >Add product</button>

                </form>
            </div>

        );
    }
}
export default AddProduct;