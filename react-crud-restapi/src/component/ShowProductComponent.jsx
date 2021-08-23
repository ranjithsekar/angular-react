import React, { Component } from 'react';
import ProductService from '../service/ProductService';

class ShowProductComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            message: null
        }
        this.getAllProducts = this.getAllProducts.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount(){
        this.getAllProducts();
    }

    getAllProducts() {
        ProductService.getAllProducts()
        .then((response) => {
            this.setState({
                products: response.data.result,
                message: response.data.message
            })
        });
    }

    deleteProduct(productId) {
        ProductService.deleteUser(productId)
           .then(response => {
               this.setState({message: 'Product deleted successfully.'});
               this.setState({products: this.state.products.filter(product => product.id !== productId)});
           })
    }

    editProduct(productId) {
        window.localStorage.setItem("productId", productId);
        this.props.history.push('/edit-product');
    }

    addProduct() {
        window.localStorage.removeItem("productId");
        this.props.history.push('/add-product');
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Product Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addProduct()}> Add Product</button>
                <table border="1" className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                        product =>
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteProduct(product.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editProduct(product.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowProductComponent;