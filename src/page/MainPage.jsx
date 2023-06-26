import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Container, Form, InputGroup, Spinner } from 'react-bootstrap';
import { addProductToCart, getProduct, getProductByName } from '../services/api';
import CardComponent from '../components/CardComponent';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


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

    const handleAddCart = async (product) => {
        const res = await addProductToCart(product);

        if (res.data.error) {
            toast.error(res.data.error);
        }else{
            toast.success('Product added to cart successfully');
        }
    }



    return (
        <Container>
            <h1>Store</h1>
            <div className='row mb-3 mt-3'>
                <div className='col-11'>
                    <InputGroup className="col-10">
                        <Form.Control
                            placeholder="search product..."
                            aria-label="search product"
                            aria-describedby="basic-addon2"
                            onChange={handleSearch}
                        />
                    </InputGroup>
                </div>
                <div className='col-1'>
                    <Link to={'/cart'}>
                        <Button>&#128722;</Button>
                    </Link>
                </div>
            </div>
            {
                products?.data?.products.length === 0 ? (
                    <div className='container-spinner'>
                        <Spinner style={{ display: "flex", alignSelf: "center" }} animation="border" variant="primary" />
                    </div>
                ) : (
                    <CardComponent products={products?.data?.products} handleAddCart={handleAddCart} />
                )
            }

            <ToastContainer position="bottom-center" />
        </Container >
    );
};

export default MainPage;
