import React from 'react';
import Card from 'react-bootstrap/Card';

// Reusable component. Displays a product with a short description, and
// a link to 'More Info'
// Details passed on via props
function ProductCard(props) {
    return (
        <div className='Product-cards'>
            <Card style={{ width: '18rem' }} >
                <Card.Img className='Card-Img' variant="top" src={props.imageSource} />
                <hr></hr>
                <Card.Body>
                    <Card.Title className='Card-Title'>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <hr></hr>
                    <a href={props.url} className='btn btn-dark'>More Info</a>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;