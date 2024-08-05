import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import './AddProducts.css'

const AddProducts = () => {

    const [validated, setValidated] = useState(false);
    const [productData, setProductData] = useState({
        productName: '',
        productCategory: '',
        productPrice: '',
        productStock: '',
        productPhoto: null

    });

    const handleSubmit = (event) => {

        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);

        }
        else {
            setValidated(true);

            console.log("Submitted Successfully!");
        }


    };
    const handleChange = (e) => {

        const { name, value } = e.target;

        if(name==='productPhoto'){
            setProductData({ ...productData, [name]: e.target.files[0]});
        }
        else{
            setProductData({ ...productData, [name]: value });
        }

    }

    console.log('productData ----->', productData);
    return (

        <Container className='form-container my-4'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>
                <Row className="mb-3">
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Product Name:</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder="Product Name"
                            name='productName'
                        />
                        <Form.Control.Feedback type='invalid' >Please enter product name!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            required
                            type="text"
                            name='productCategory'
                            placeholder="Category"
                        />
                        <Form.Control.Feedback type='invalid' >Please enter category!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            required
                            type="number"
                            name='productPrice'
                            placeholder="Price"
                        />
                        <Form.Control.Feedback type='invalid' >Please enter price!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom02">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            required
                            type="number"
                            name='productStock'
                            placeholder="Price"
                        />
                        <Form.Control.Feedback type='invalid' >Please enter stock!</Form.Control.Feedback>
                    </Form.Group>

                </Row>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload product photo</Form.Label>
                    <Form.Control type="file" name='productPhoto' onChange={handleChange}
                    />
                </Form.Group>

                <Button type="submit">Submit form</Button>
            </Form>
        </Container>

    )
}

export default AddProducts