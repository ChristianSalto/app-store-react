import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import { Container, Spinner } from 'react-bootstrap';
import { getProductToCart } from '../services/api';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [productsCart, setProductsCart] = useState([])

    useEffect(() => {
        const getDataCart = async () => {
            const res = await getProductToCart();
            setProductsCart(res)
        }

        getDataCart();
    }, [])

    return (
        <Container>
            <Link to={'/'}>
                <span className='btn-link'>&#x2190;back</span>
            </Link>
            <h1>Cart</h1>
            {productsCart ? (
                productsCart.data && productsCart.data.products ? (
                    <CardComponent products={productsCart.data.products} />
                ) : (
                    <div className="alert alert-info" role="alert">
                        There aren't any products in the cart
                    </div>
                )
            ) : (
                <div className='container-spinner'>
                    <Spinner style={{ display: "flex", alignSelf: "center" }} animation="border" variant="primary" />
                </div>
            )}
        </Container>
    );
};

export default CartPage;