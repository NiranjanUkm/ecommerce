import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/productSlice'
import { useSelector } from 'react-redux'

const LatestProducts = () => {

    const dispatch = useDispatch();
    const products = useSelector((state)=>state.products.data);
    // const products = [{id:1}, {id:2}, {id:3}, {id:4}]


    // const [products, setProducts] = useState([]); -------->with props drilling
    useEffect(()=>{

        // fetch("./products.json")
        // .then((data) => data.json())
        // .then((res) => setProducts(res.products)); -------->with props drilling

        fetch("./products.json")
        .then((data) => data.json())
        .then((res) => dispatch(getProducts(res.products)));
    },[]);
    console.log("products ======>",products);
    return (
        <>
            <Row>
                <Col className='my-3'>
                    <h2>Latest Products</h2>
                </Col>
            </Row>
            <Row>
                {products && products.map((product,index)=>(
                    <SingleProduct key={index} product = {product}/>
                ))}
            </Row>
        </>
    )
}

export default LatestProducts
