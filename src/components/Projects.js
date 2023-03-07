import React from 'react'
import picture from '../components/ecommerce.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
    return (
        <div class="container mt-3 text-black">
            <h1>MY PROJECTS</h1>
            <div class="row">
                <div class="col-sm mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>ECommerce Website</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>Marketing Platform</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>ToDo List</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div class="row">
                <div class="col-sm mt-3">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>Twitter Clone</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm mt-3">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>BMI Calculator</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm mt-3">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>Online Food Apps</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Projects
