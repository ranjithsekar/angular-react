import React from 'react';
import './App.css';
import ShowProductComponent from './component/ShowProductComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProductComponent from './component/AddProductComponent';
import EditProductComponent from './component/EditProductComponent';

function App() {
  return (
    <div className="container">
      <Router>
      <div className="col-md-6">
      <h1 className="text-center">Product CRUD Application</h1>
      <Switch>
        <Route path="/" exact component={ShowProductComponent} />
        <Route path="/products" component={ShowProductComponent} />
        <Route path="/add-product" component={AddProductComponent} />
        <Route path="/edit-product" component={EditProductComponent} />
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
