import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleProduct = ({product}) => {
  return (
    <Col md={3} className='mb-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.Title}</Card.Title>
                            <Card.Text>
                                {product.Description}
                            </Card.Text>
                            <Link className="btn btn-primary" to={`/product/${product.Id}`} variant="primary">More Info</Link>
                        </Card.Body>
                    </Card>
                </Col>
  )
}

export default SingleProduct