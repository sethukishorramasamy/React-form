// import React, { useState } from 'react';
// import styles from './Style.module.css';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function Businessform() {
//     const [BusinessformData, setBusinessFormData] = useState({
//         business_first_name: '',
//         business_last_name: '',
//         business_home_street_address: '',
//         business_street_address: '',
//         business_home_city_name: '',
//         business_home_region_name: '',
//         business_city_name: '',
//         business_region_name: '',
//         business_home_zipcode: '',
//         business_home_language: '',
//         business_zipcode: '',
//         business_language: '',
//         business_web_address: '',
//         business_phone_number: '',
//         business_fax_number: '',
//         business_contact_phone_number: '',
//         business_contact_email_address: '',
//         selectedBusinessOption: null,
//     });

//     const [selectedBusinessOption, setBusinessSelectedOption] = useState(null);

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setBusinessFormData((prevData) => ({ ...prevData, [id]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     const handleOptionChange = (event) => {
//         setBusinessSelectedOption(event.target.id);
//     };

//     return (

//         <div>
//             <div className='px-16' style={{ margin: '10px' }}>
//                 <Form onSubmit={handleSubmit}>
//                     <Row>
//                         <Col md={5}>
//                             <Row>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_first_name">
//                                         <Form.Label>Business Name <span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="First Name" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_last_name">
//                                         <Form.Label> <span style={{
//                                             color: "white"
//                                         }}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="Last Name" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col md={1}>
//                         </Col>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="business_home_street_address">
//                                 <Form.Label>Home Address <span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="text" placeholder="Street Address" required onChange={handleChange} />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="business_street_address">
//                                 <Form.Label>Business Address <span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="text" placeholder="Street Address" required onChange={handleChange} />
//                             </Form.Group>
//                         </Col>
//                         <Col md={1}>
//                         </Col>
//                         <Col md={5}>
//                             <Row>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_home_city_name">
//                                         <Form.Label>City <span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="Enter City Name" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_home_region_name">
//                                         <Form.Label>Region <span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Region Name" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col md={5}>
//                             <Row>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_city_name">
//                                         <Form.Label>City <span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="Enter City Name" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_region_name">
//                                         <Form.Label>Region <span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Region Name" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col md={1}>
//                         </Col>
//                         <Col md={5}>
//                             <Row>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_home_zipcode">
//                                         <Form.Label>Zip Code<span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="number" placeholder="Enter Portal | Zip Code" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_home_language">
//                                         <Form.Label>Language <span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Native Language" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col md={5}>
//                             <Row>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_zipcode">
//                                         <Form.Label>Zip Code<span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="number" placeholder="Enter Portal | Zip Code" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={6}>
//                                     <Form.Group className="mb-3" controlId="business_language">
//                                         <Form.Label>Language <span className={styles.requiredfield}> *</span></Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Native Language" required onChange={handleChange} />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                             <div>
//                                 <div className='d-flex mt-4'>
//                                     <p style={{ fontWeight: "500" }}>Entity Ownership Information - Business Structure</p>
//                                 </div>
//                                 <div className='d-flex'>
//                                     <Form.Check reverse
//                                         type="radio"
//                                         id={`General Partnership`}
//                                         label={`General`}
//                                         name="radioGroup"
//                                         checked={selectedBusinessOption === 'General Partnership'}
//                                         onChange={handleOptionChange}
//                                         style={{ margin: "0px 20px 0px 0px" }}
//                                     />
//                                     <Form.Check reverse
//                                         type="radio"
//                                         id={`Limited Partnership`}
//                                         label={`Limited`}
//                                         name="radioGroup"
//                                         checked={selectedBusinessOption === 'Limited Partnership'}
//                                         onChange={handleOptionChange}
//                                         style={{ margin: "0px 20px 0px 0px" }}
//                                     />
//                                     <Form.Check reverse
//                                         type="radio"
//                                         id={`Limited Liability Partnership`}
//                                         label={`Limited Liability`}
//                                         name="radioGroup"
//                                         checked={selectedBusinessOption === 'Limited Liability Partnership'}
//                                         onChange={handleOptionChange}
//                                         style={{ margin: "0px 20px 0px 0px" }}
//                                     />
//                                 </div>
//                                 {selectedBusinessOption && (
//                                     <div className='mt-3'>
//                                         <p>You selected : {selectedBusinessOption}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </Col>
//                         <Col md={1}>
//                         </Col>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="business_web_address">
//                                 <Form.Label>Business Web Address <span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="text" placeholder="Enter Web Address" required onChange={handleChange} />
//                             </Form.Group>
//                             <Col md={12}>
//                                 <Row>
//                                     <Col md={6}>
//                                         <Form.Group className="mb-3" controlId="business_phone_number">
//                                             <Form.Label>Business Phone<span className={styles.requiredfield}> *</span></Form.Label>
//                                             <Form.Control type="tel" placeholder="Business Phone Number" required onChange={handleChange} />
//                                         </Form.Group>
//                                     </Col>
//                                     <Col md={6}>
//                                         <Form.Group className="mb-3" controlId="business_fax_number">
//                                             <Form.Label>Business Fax <span className={styles.requiredfield}> *</span></Form.Label>
//                                             <Form.Control type="tel" placeholder="Enter Fax Number" required onChange={handleChange} />
//                                         </Form.Group>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                             <Col md={12}>
//                                 <Row>
//                                     <Col md={6}>
//                                         <Form.Group className="mb-3" controlId="business_contact_phone_number">
//                                             <Form.Label>Contact Phone NUmber <span className={styles.requiredfield}> *</span></Form.Label>
//                                             <Form.Control type="tel" placeholder="Enter Phone NUmber" required onChange={handleChange} />
//                                         </Form.Group>
//                                     </Col>
//                                     <Col md={6}>
//                                         <Form.Group className="mb-3" controlId="business_contact_email_address">
//                                             <Form.Label>Contact Email <span className={styles.requiredfield}> *</span></Form.Label>
//                                             <Form.Control type="email" placeholder="Enter Email Address" required onChange={handleChange} />
//                                         </Form.Group>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Col>
//                     </Row>
//                 </Form>
//             </div>
//         </div>
//     );
// }

// export default Businessform;
