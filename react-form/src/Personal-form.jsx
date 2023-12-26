import React, { useState } from 'react';
import styles from './Style.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Personalform() {
    return (

        <div>
            <div className='px-16' style={{ margin: '10px' }}>

                <Form>
                    <Row>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>Full Name<span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="First Name" required />
                            </Form.Group>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label><span style={{
                                    color: "white"
                                }}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Second Name" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>Email Address <span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter Email Address" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>Phone Number<span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter Phone Number" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>School | College | Institution Name <span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter School or College or Institution Name" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>Grade | Year <span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter Grade or Year" required />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Personalform;
