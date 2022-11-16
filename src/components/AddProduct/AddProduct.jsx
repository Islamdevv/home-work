import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = ({ createProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [descr, setDescr] = useState('');
    const [img, setImg] = useState('');

    function handleValue() {
        let newProduct = {
            title,
            price,
            descr,
            img,
        };
        createProduct(newProduct);
        setTitle('');
        setPrice('');
        setDescr('');
        setImg('');
    }

    return (
        <div className="container">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Product title"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        placeholder="Product price"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        onChange={(e) => setDescr(e.target.value)}
                        type="text"
                        placeholder="Product descr"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        onChange={(e) => setImg(e.target.value)}
                        type="text"
                        placeholder="Product img"
                    />
                </Form.Group>

                <Button
                    variant="danger"
                    type="submit"
                    onClick={() => handleValue()}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;