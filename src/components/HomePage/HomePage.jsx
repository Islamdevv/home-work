import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomePage = ({ products, getProducts, deleteProduct }) => {
    const [selected, setSelected] = useState('');
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="d-flex justify-content-center mt-4 flex-wrap">
            {products.map((item) => (
                <Card key={item.id} style={{width: '18rem', margin: '20px', border: selected === item.id ? '5px double black' : '',
                    }}
                    onClick={() => setSelected(item.id)}>
                    <Card.Body>
                        <Card.Img src={item.img} style={{height: '300px'}}/>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>$ {item.price}</Card.Text>
                        <Card.Text>{item.descr}</Card.Text>

                        <Button
                            variant="danger"
                            onClick={() => deleteProduct(item.id)}
                        >
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default HomePage;