// import React, { useState } from 'react';
// import styles from './Style.module.css';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function Personalform() {
//     const [PersonalFormData, setPersonalFormData] = useState({
//         personal_first_name: '',
//         personal_last_name: '',
//         personal_email_address: '',
//         personal_phone_number: '',
//         personal_institution_name: '',
//         personal_grade_year: '',
//     });

//     const handlePersonalChange = (e) => {
//         const { id, value } = e.target;
//         setPersonalFormData((prevData) => ({ ...prevData, [id]: value }));
//     };

//     const handlePersonalSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic if needed
//         console.log('Form submitted with data:', PersonalFormData);
//     };

//     return (
//         <div>
//             <div className='px-16' style={{ margin: '10px' }}>
//                 <Form onSubmit={handlePersonalSubmit}>
//                     <Row>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="personal_first_name">
//                                 <Form.Label>Full Name<span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="text" placeholder="First Name" required onChange={handlePersonalChange} />
//                             </Form.Group>
//                         </Col>
//                         <Col md={1}></Col>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="personal_last_name">
//                                 <Form.Label><span style={{ color: "white" }}> *</span></Form.Label>
//                                 <Form.Control type="text" placeholder="Last Name" required onChange={handlePersonalChange} />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="personal_email_address">
//                                 <Form.Label>Email Address <span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="email" placeholder="Enter Email Address" required onChange={handlePersonalChange} />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="personal_phone_number">
//                                 <Form.Label>Phone Number<span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="tel" placeholder="Enter Phone Number" required onChange={handlePersonalChange} />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="personal_institution_name">
//                                 <Form.Label>School | College | Institution Name <span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="text" placeholder="Enter School or College or Institution Name" required onChange={handlePersonalChange} />
//                             </Form.Group>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col md={5}>
//                             <Form.Group className="mb-3" controlId="personal_grade_year">
//                                 <Form.Label>Grade | Year <span className={styles.requiredfield}> *</span></Form.Label>
//                                 <Form.Control type="text" placeholder="Enter Grade or Year" required onChange={handlePersonalChange} />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                 </Form>
//             </div>
//         </div>
//     );
// }

// export default Personalform;