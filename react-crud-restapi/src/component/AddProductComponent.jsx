import React, { Component } from "react";
import ProductService from "../service/ProductService";


class AddProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: '',
            message: null
        }

        this.addProduct = this.addProduct.bind(this);
    }

    addProduct = (e) => {
        e.preventDefault();

        let product = {name: this.state.name, category: this.state.category, price: this.state.price};

        ProductService.addProduct(product)
        .then(res => {
            this.setState({message : 'Product added successfully.'});
            this.props.history.push('/products');
        });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <h2 className="text-center">Add Product</h2>
                <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="name" className="form-control" value={this.state.name} 
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <input type="text" name="category" placeholder="category" className="form-control" value={this.state.category} 
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input type="text" name="price" placeholder="price" className="form-control" value={this.state.price} 
                    onChange={this.onChange} />
                </div>

                <button className="btn btn-success" onClick={this.addProduct}>Add</button>
                </form>
            </div>
        );
        }
}

export default AddProductComponent;