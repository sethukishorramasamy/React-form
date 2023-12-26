// Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Businessform from './Business-form';
import Personalform from './Personal-form';
import Uploadfiles from './Upload-files';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


export const LandingPage = () => {
    const [activeTab, setActiveTab] = useState('Selection');

    const handleTabChange = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    const handleButtonClick = (selectedTab) => {
        setActiveTab(selectedTab);
    };
    const [selectedOption, setSelectedOption] = useState('business');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };

    useEffect(() => {
        // Additional logic or side effects can be placed here if needed
        // This effect runs once when the component mounts
    }, []); // Empty dependency array ensures it runs only once when the component mounts


    return (
        <div style={{ background: '#f2f2f2', minHeight: '100vh' }}>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Forms</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Container className="my-4 p-4" style={{ background: 'white', borderRadius: '10px', minHeight: '70vh' }}> */}
            <Container className="my-4 p-4" style={{ background: 'white', borderRadius: '10px' }}>
                <Tabs
                    defaultActiveKey="Selection"
                    activeKey={activeTab}
                    onSelect={handleTabChange}
                    id="uncontrolled-tab-example"
                    className='mb-4'
                    fill
                    style={{ marginBottom: '20px' }}
                >
                    <Tab eventKey="Selection" title="Selection" className=" align-items-center justify-content-center">
                        <div>
                            <Container fluid className="text-center flex-grow-1 d-flex flex-column justify-content-center" style={{
                                minHeight: "70vh"
                            }}>
                                <div className='mt-4'>
                                    <Form className="d-flex flex-row flex-column align-items-center justify-content-center">
                                        <div className="mb-3 text-center d-flex">
                                            <MDBRow>
                                                <MDBCol size='4'>
                                                    <Form.Check
                                                        type="radio"
                                                        id={`business`}
                                                        label={`Business`}
                                                        name="radioGroup"
                                                        checked={selectedOption === 'business'}
                                                        onChange={handleOptionChange}
                                                        style={{ width: '50px', fontSize: "20px", marginLeft: "-70px" }}
                                                    />
                                                </MDBCol>

                                                <MDBCol size='4'>
                                                </MDBCol>

                                                <MDBCol size='4'>
                                                    <Form.Check
                                                        type="radio"
                                                        id={`personal`}
                                                        label={`Personal`}
                                                        name="radioGroup"
                                                        checked={selectedOption === 'personal'}
                                                        onChange={handleOptionChange}
                                                        style={{ width: '50px', fontSize: "20px", marginLeft: "-10px" }}
                                                    />
                                                </MDBCol>
                                            </MDBRow>
                                        </div>
                                        <div>
                                            {selectedOption === 'personal' && (
                                                <h1 style={{ fontSize: "50px", fontWeight: 550 }}>You selected {'Personal'}</h1>
                                            )}

                                            {selectedOption === 'business' && (
                                                <h1 style={{ fontSize: "50px", fontWeight: 550 }}>You selected {'Business'}</h1>
                                            )}
                                        </div>
                                    </Form>
                                </div>
                                <p style={{ fontSize: "23px", color: "gray" }} className='mt-1'>Explore our collection of books and manage your library activities with ease.</p>
                                <div className='mt-4'>
                                    <Button
                                        variant="outline-primary"
                                        onClick={() => handleButtonClick(selectedOption === 'personal' ? 'PersonalForm' : 'BusinessForm')}
                                        style={{ fontSize: "18px" }}
                                    >
                                        Click to Fill Form
                                    </Button>
                                </div>
                            </Container>
                        </div>
                    </Tab>

                    <Tab eventKey="BusinessForm" title="Business Form" disabled>
                        <div style={{ height: "10px" }}></div>
                        <Businessform />
                        <Button className='mx-2 mb-4' variant="primary" type="submit" onClick={() => handleButtonClick('uploadFiles')}>
                            Upload Files
                        </Button>
                        <div style={{ height: "20px" }}></div>
                    </Tab>


                    <Tab eventKey="PersonalForm" title="Personal Form" disabled>
                        <div style={{ height: "10px" }}></div>
                        <Personalform />
                        <Button className='mt-4 mx-2' variant="primary" type="submit" onClick={() => handleButtonClick('uploadFiles')}>
                            Upload Files
                        </Button>
                    </Tab>


                    <Tab eventKey="uploadFiles" title="Upload Files">
                        <Uploadfiles />
                    </Tab>


                    <Tab eventKey="Preview" title="Preview">
                        {/* <Button variant="primary" onClick={() => handleButtonClick('Selection')}>
                            Go to Tab 1
                        </Button>
                        <Button variant="primary" onClick={() => handleButtonClick('BusinessForm')}>
                            BusinessForm
                        </Button>
                        <Button variant="primary" onClick={() => handleButtonClick('BusinessForm')}>
                            BusinessForm
                        </Button>
                        <Button variant="primary" onClick={() => handleButtonClick('uploadFiles')}>
                            Go to Tab 4
                        </Button>
                        <Button variant="primary" onClick={() => handleButtonClick('Preview')}>
                            Go to Tab 5
                        </Button> */}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quam amet enim rem officiis odio voluptatem ipsa explicabo voluptatum beatae.
                    </Tab>
                </Tabs>
            </Container>
            <Navbar fixed="bottom" expand="lg" bg="light" variant="dark">
                <Container className="text-center">
                    <div style={{ width: '100%' }}>
                        <p className='text-black'>Designed & Developed by Sethu Kishor</p>
                    </div>
                </Container>
            </Navbar>
        </div >
    );
};
