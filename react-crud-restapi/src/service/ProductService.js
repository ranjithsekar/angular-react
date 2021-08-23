import axios from 'axios';

const SERVICE_URL = "http://localhost:6060/sboot-rest/api/product"
class ProductService {

    getAllProducts() {
        return axios.get(SERVICE_URL + '/all');
    }

    getProductById(productId) {
        return axios.get(SERVICE_URL + '/' + productId);
    }

    addProduct(product) {
        return axios.post(SERVICE_URL + '/add', product);
    }

    updateProduct(product) {
        return axios.put(SERVICE_URL + '/update', product);
    }

    deleteUser(productId) {
        return axios.delete(SERVICE_URL + '/delete/' + productId);
    }
}

export default new ProductService();