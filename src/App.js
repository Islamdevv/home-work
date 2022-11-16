import './App.css';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import HomePage from './components/HomePage/HomePage';
import AddProduct from './components/AddProduct/AddProduct';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const API = 'http://localhost:8000/products';
    //create
    function createProduct(newProduct) {
        axios.post(API, newProduct);
    }
    //read products
    const [products, setProducts] = useState([]);
    async function getProducts() {
        let result = await axios.get(API);
        setProducts(result.data);
    }

    //delete
    async function deleteProduct(id) {
        await axios.delete(`${API}/${id}`);
        getProducts();
    }
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route
                    path="/homePage"
                    element={
                        <HomePage
                            products={products}
                            getProducts={getProducts}
                            deleteProduct={deleteProduct}
                        />
                    }
                />
                <Route
                    path="/addProduct"
                    element={<AddProduct createProduct={createProduct} />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;