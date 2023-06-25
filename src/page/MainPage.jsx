import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { addProductToCart, getProduct, getProductByName } from '../services/api';
import CardComponent from '../components/CardComponent';

const MainPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getDataProduct = async () => {
            const res = await getProduct();           
            setProducts(res)
        }
        
        getDataProduct();
    }, [])
    
    
    const handleSearch = async (e) => {
        const res = await getProductByName(e.target.value);
        setProducts(res);
    } 

    return (
        <Container>
            <InputGroup className="mb-3 mt-3">
                <Form.Control
                    placeholder="search product..."
                    aria-label="search product"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                />
            </InputGroup>

            <CardComponent products={products?.data?.products} />
        </Container>
    );
};

export default MainPage;