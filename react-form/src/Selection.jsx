
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Selection = () => {

//     const [selectedOption, setSelectedOption] = useState('Business');

//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.id);
//         global.Selected_option = event.target.id;
//     };

//     return (
//         <div>
//             <div>
//                 <Container fluid className="text-center flex-grow-1 d-flex flex-column justify-content-center" style={{
//                     minHeight: "39vh"
//                 }}>
//                     <div className='mt-4'>
//                         <Form className="d-flex flex-row flex-column align-items-center justify-content-center">
//                             <div className="mb-3 text-center d-flex">
//                                 <MDBRow>
//                                     <MDBCol size='4'>
//                                         <Form.Check
//                                             type="radio"
//                                             id={`Business`}
//                                             label={`Business`}
//                                             name="radioGroup"
//                                             checked={selectedOption === 'Business'}
//                                             onChange={handleOptionChange}
//                                             style={{ width: '50px', fontSize: "20px", marginLeft: "-70px" }}
//                                         />
//                                     </MDBCol>
//                                     <MDBCol size='4'></MDBCol>
//                                     <MDBCol size='4'>
//                                         <Form.Check
//                                             type="radio"
//                                             id={`Personal`}
//                                             label={`Personal`}
//                                             name="radioGroup"
//                                             checked={selectedOption === 'Personal'}
//                                             onChange={handleOptionChange}
//                                             style={{ width: '50px', fontSize: "20px", marginLeft: "-10px" }}
//                                         />
//                                     </MDBCol>
//                                 </MDBRow>
//                             </div>
//                             <div style={{
//                                 marginTop: "25px"
//                             }}>
//                                 <h1 style={{ fontSize: "50px", fontWeight: 550 }}>You selected {selectedOption}</h1>
//                             </div>
//                         </Form>
//                     </div>
//                     <p style={{ fontSize: "23px", color: "gray" }} className='mt-1'>Explore our collection of books and manage your library activities with ease</p>
//                 </Container>
//             </div>

//         </div>
//     )
// }

// export default Selection