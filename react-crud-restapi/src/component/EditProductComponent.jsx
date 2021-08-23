import React, { Component } from "react";
import ProductService from "../service/ProductService";

class EditProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            category: '',
            price: '',
            message: null
        }
        this.getProduct = this.getProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct() {
        ProductService.getProductById(window.localStorage.getItem("productId"))
        .then( (response) => {
            let product = response.data.result;
            this.setState({
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price
            })
        });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    updateProduct = (e) => {
        e.preventDefault();
        let product = {id: this.state.id, name: this.state.name, category: this.state.category, price: this.state.price};
    
        ProductService.updateProduct(product)
        .then(res => {
            this.setState({message : 'Product updated successfully.'});
            this.props.history.push('/products');
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Product</h2>

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

                <button className="btn btn-success" onClick={this.updateProduct}>Update</button>
                </form>
            </div>
        );
    }

}

export default EditProductComponent;