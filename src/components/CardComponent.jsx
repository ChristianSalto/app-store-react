import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ products, handleAddCart = undefined }) => {
    return (
        <div className='row d-flex flex-wrap p-2'>
            {products?.map((product) => (
                <Card className='col-3 m-3 p-2' key={product._id} style={{ minWidth: "350px" }}>
                    <Card.Img variant="top" src={"imgs/" + product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ display: "flex", justifyContent: "space-between" }}>
                        <Card.Text> <strong>{product.price} €</strong> </Card.Text>
                        {handleAddCart ? (
                            <Button variant="primary" onClick={() => handleAddCart(product)}>Add cart</Button>
                        ) : (
                            <></>
                        )}
                    </Card.Footer>
                </Card>
            ))}
        </div>
    )
}

export default CardComponent;