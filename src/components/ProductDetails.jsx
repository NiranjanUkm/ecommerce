import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const [product, setProducts] = useState({});
    const { id } = useParams();
    const products = useSelector((state)=>state.products.data);


    const getProductDetails = useCallback(async () =>{

        // const res = await axios.get('/products.json');  -------->with props drilling
        // const products = res.data.products;
        const currentProd = products.find((prod) => prod.Id === id);
        setProducts(currentProd);
    },[id]);
    
    useEffect(()=>{
        getProductDetails(); 
    },[getProductDetails]);
    console.log('Products ----->',product);

    return (
        <Container>
            <Row className='my-3'>
                <Col md={5}>
                    <img src={product?.img} alt="" style={{width:"100%"}}/>
                </Col>
                <Col>
                    <ListGroup> 
                        <ListGroup.Item>
                           <h4>{product?.Title}</h4> 
                        </ListGroup.Item>
                        <ListGroup.Item>{product?.Maker}</ListGroup.Item>
                        <ListGroup.Item>{product?.Url}</ListGroup.Item>
                        <ListGroup.Item>{product?.Description}</ListGroup.Item>
                        <ListGroup.Item>{product?.Ratings}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails