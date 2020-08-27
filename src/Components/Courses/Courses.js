import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import './Courses.css'
const Courses = (props) => {
    const {name, price, instructor, image} = props.course;
    return (
        
            <div className="card col-md-3 mt-3 mr-5">
                <Card className="main-card">
                    <Card.Img className="card-image" src={image} />
                    <Card.Body className="text-center">
                        <Card.Title className="card-headline">{name}</Card.Title>
                        <p>By {instructor}</p>
                        <Card.Text>Price: ${price}</Card.Text>
                        <Button className= "card-button" variant="success" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>
                    </Card.Body>
                </Card>
            </div>
        
    );
};

export default Courses;