import React, { useState } from 'react';
import styles from './Style.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Businessform() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };
    return (

        <div>
            <div className='px-16' style={{ margin: '10px' }}>

                <Form>
                    <Row>
                        <Col md={5}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_2">
                                        <Form.Label>Business Name <span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="First Name" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_3">
                                        <Form.Label> <span style={{
                                            color: "white"
                                        }}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Last Name" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>Home Address <span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Street Address" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>Business Address <span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Street Address" required />
                            </Form.Group>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_2">
                                        <Form.Label>City <span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter City Name" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_3">
                                        <Form.Label>Region <span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Region Name" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_2">
                                        <Form.Label>City <span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter City Name" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_3">
                                        <Form.Label>Region <span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Region Name" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_2">
                                        <Form.Label>Zip Code<span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Portal | Zip Code" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_3">
                                        <Form.Label>Language <span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Native Language" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={5}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_2">
                                        <Form.Label>Zip Code<span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Portal | Zip Code" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="user_email_3">
                                        <Form.Label>Language <span className={styles.requiredfield}> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter Native Language" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div>
                                <div className='d-flex mt-4'>
                                    <p style={{ fontWeight: "500" }}>Entity Ownership Information - Business Structure</p>
                                </div>
                                <div className='d-flex'>
                                    <Form.Check reverse
                                        type="radio"
                                        id={`General Partnership`}
                                        label={`General`}
                                        name="radioGroup"
                                        checked={selectedOption === 'General Partnership'}
                                        onChange={handleOptionChange}
                                        style={{ margin: "0px 20px 0px 0px" }}
                                    />
                                    <Form.Check reverse
                                        type="radio"
                                        id={`Limited Partnership`}
                                        label={`Limited`}
                                        name="radioGroup"
                                        checked={selectedOption === 'Limited Partnership'}
                                        onChange={handleOptionChange}
                                        style={{ margin: "0px 20px 0px 0px" }}
                                    />
                                    <Form.Check reverse
                                        type="radio"
                                        id={`Limited Liability Partnership`}
                                        label={`Limited Liability`}
                                        name="radioGroup"
                                        checked={selectedOption === 'Limited Liability Partnership'}
                                        onChange={handleOptionChange}
                                        style={{ margin: "0px 20px 0px 0px" }}
                                    />
                                </div>
                                {selectedOption && (
                                    <div className='mt-3'>
                                        <p>You selected : {selectedOption}</p>
                                    </div>
                                )}
                            </div>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <Form.Group className="mb-3" controlId="user_email_1">
                                <Form.Label>Business Web Address <span className={styles.requiredfield}> *</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter Web Address" required />
                            </Form.Group>
                            <Col md={12}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="user_email_2">
                                            <Form.Label>Business Phone<span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="email" placeholder="Business Phone Number" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="user_email_3">
                                            <Form.Label>Business Fax <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="email" placeholder="Enter Fax Number" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="user_email_2">
                                            <Form.Label>Contact Phone NUmber <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="email" placeholder="Enter Phone NUmber" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="user_email_3">
                                            <Form.Label>Contact Email <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email Address" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Businessform;
