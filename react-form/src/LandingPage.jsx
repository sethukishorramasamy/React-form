// Imports
import React, { useState, useCallback } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Style.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import './UploadFiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const LandingPage = () => {
    const [activeTab, setActiveTab] = useState('Selection');
    const [selectedSelectionOption, setSelectedOption] = useState('Business');
    const [selectedBusinessOption, setBusinessSelectedOption] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [BusinessFormData, setBusinessFormData] = useState({
        business_first_name: '',
        business_last_name: '',
        business_home_street_address: '',
        business_street_address: '',
        business_home_city_name: '',
        business_home_region_name: '',
        business_city_name: '',
        business_region_name: '',
        business_home_zipcode: '',
        business_home_language: '',
        business_zipcode: '',
        business_language: '',
        business_web_address: '',
        business_phone_number: '',
        business_fax_number: '',
        business_contact_phone_number: '',
        business_contact_email_address: '',
        selectedBusinessOption: null,
    });

    const [PersonalFormData, setPersonalFormData] = useState({
        personal_first_name: '',
        personal_last_name: '',
        personal_email_address: '',
        personal_phone_number: '',
        personal_institution_name: '',
        personal_grade_year: '',
    });

    // set selection as Personal or Business
    const handleSelectionOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };

    // set Business form Partnership selection
    const handleBusinessOptionChange = (event) => {
        setBusinessSelectedOption(event.target.id);
    };

    // set active tab
    const handleButtonClick = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    // navigate to preview tab from upload files tab
    const handlePreviewClick = () => {
        setActiveTab('Preview');
    };

    // storing business form inputs
    const handleBusinessChange = (e) => {
        const { id, value } = e.target;
        setBusinessFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // storing personal form inputs
    const handlePersonalChange = (e) => {
        const { id, value } = e.target;
        setPersonalFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // Submit handling Business and Personal
    const handleBusinessPersonalSubmit = (e) => {
        e.preventDefault();
        handleButtonClick('uploadFiles')
    };

    // file(s) upload
    const onDrop = useCallback((acceptedFiles) => {
        const filesWithPreviews = acceptedFiles.map((file) => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file),
            });
        });
        setUploadedFiles(filesWithPreviews);
        setIsFileSelected(true);
        // alert with file name
        if (acceptedFiles.length > 0) {
            alert(`File uploaded: ${acceptedFiles[0].name}`);
            setIsFileSelected(true);
        }
    }, []);

    // Using the useDropzone hook to create a file dropzone in a React component
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        // Callback function invoked when files are dropped onto the dropzone
        onDrop,
        // Allowing multiple files to be selected or dropped at once
        multiple: true,
    });


    return (
        <div style={{ background: '#f2f2f2', minHeight: '100vh' }}>

            {/* Top Navbar */}
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Forms</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Top Navbar */}

            {/* Container */}
            <Container className="my-4 p-4" style={{ background: 'white', borderRadius: '10px' }}>

                {/* Tabs */}
                <Tabs
                    defaultActiveKey="Selection"
                    activeKey={activeTab}
                    onSelect={handleButtonClick}
                    id="uncontrolled-tab-example"
                    className='mb-4'
                    fill
                    style={{ marginBottom: '20px' }}
                >

                    {/* Selection Tab */}
                    <Tab eventKey="Selection" title="Selection" className=" align-items-center justify-content-center">
                        {/* selection options */}
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
                                                        id={`Business`}
                                                        label={`Business`}
                                                        name="radioGroup"
                                                        checked={selectedSelectionOption === 'Business'}
                                                        onChange={handleSelectionOptionChange}
                                                        style={{ width: '50px', fontSize: "20px", marginLeft: "-70px" }}
                                                    />
                                                </MDBCol>
                                                <MDBCol size='4'></MDBCol>
                                                <MDBCol size='4'>
                                                    <Form.Check
                                                        type="radio"
                                                        id={`Personal`}
                                                        label={`Personal`}
                                                        name="radioGroup"
                                                        checked={selectedSelectionOption === 'Personal'}
                                                        onChange={handleSelectionOptionChange}
                                                        style={{ width: '50px', fontSize: "20px", marginLeft: "-10px" }}
                                                    />
                                                </MDBCol>
                                            </MDBRow>
                                        </div>
                                        <div>
                                            <h1 style={{ fontSize: "50px", fontWeight: 550 }}>You selected {selectedSelectionOption}</h1>
                                        </div>
                                    </Form>
                                </div>
                                <p style={{ fontSize: "23px", color: "gray" }} className='mt-1'>Explore our collection of books and manage your library activities with ease</p>
                                <div className='mt-4 text-center'>
                                    <Button
                                        variant="outline-primary"
                                        onClick={() => handleButtonClick(selectedSelectionOption === 'Personal' ? 'PersonalForm' : 'BusinessForm')}
                                        style={{ fontSize: "18px" }}
                                    >
                                        Click to Fill Form
                                    </Button>
                                </div>
                            </Container>
                        </div>
                        {/* selection options */}
                    </Tab>
                    {/* Selection Tab */}

                    {/* Business Form Tab */}
                    <Tab eventKey="BusinessForm" title="Business Form" disabled>
                        <div style={{ height: "10px" }}></div>
                        <div className='px-16' style={{ margin: '10px' }}>
                            <Form onSubmit={handleBusinessPersonalSubmit}>
                                <Row>
                                    <Col md={5}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_first_name">
                                                    <Form.Label>Business Name <span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="First Name" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_last_name">
                                                    <Form.Label> <span style={{
                                                        color: "white"
                                                    }}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Last Name" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={1}>
                                    </Col>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="business_home_street_address">
                                            <Form.Label>Home Address <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="Street Address" required onChange={handleBusinessChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="business_street_address">
                                            <Form.Label>Business Address <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="Street Address" required onChange={handleBusinessChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={1}>
                                    </Col>
                                    <Col md={5}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_home_city_name">
                                                    <Form.Label>City <span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter City Name" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_home_region_name">
                                                    <Form.Label>Region <span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Region Name" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={5}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_city_name">
                                                    <Form.Label>City <span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter City Name" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_region_name">
                                                    <Form.Label>Region <span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Region Name" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={1}>
                                    </Col>
                                    <Col md={5}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_home_zipcode">
                                                    <Form.Label>Zip Code<span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="number" placeholder="Enter Portal | Zip Code" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_home_language">
                                                    <Form.Label>Language <span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Native Language" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={5}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_zipcode">
                                                    <Form.Label>Zip Code<span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="number" placeholder="Enter Portal | Zip Code" required onChange={handleBusinessChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="business_language">
                                                    <Form.Label>Language <span className={styles.requiredfield}> *</span></Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Native Language" required onChange={handleBusinessChange} />
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
                                                    checked={selectedBusinessOption === 'General Partnership'}
                                                    onChange={handleBusinessOptionChange}
                                                    style={{ margin: "0px 20px 0px 0px" }}
                                                />
                                                <Form.Check reverse
                                                    type="radio"
                                                    id={`Limited Partnership`}
                                                    label={`Limited`}
                                                    name="radioGroup"
                                                    checked={selectedBusinessOption === 'Limited Partnership'}
                                                    onChange={handleBusinessOptionChange}
                                                    style={{ margin: "0px 20px 0px 0px" }}
                                                />
                                                <Form.Check reverse
                                                    type="radio"
                                                    id={`Limited Liability Partnership`}
                                                    label={`Limited Liability`}
                                                    name="radioGroup"
                                                    checked={selectedBusinessOption === 'Limited Liability Partnership'}
                                                    onChange={handleBusinessOptionChange}
                                                    style={{ margin: "0px 20px 0px 0px" }}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                    </Col>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="business_web_address">
                                            <Form.Label>Business Web Address <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="Enter Web Address" required onChange={handleBusinessChange} />
                                        </Form.Group>
                                        <Col md={12}>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="business_phone_number">
                                                        <Form.Label>Business Phone<span className={styles.requiredfield}> *</span></Form.Label>
                                                        <Form.Control type="tel" placeholder="Business Phone Number" required onChange={handleBusinessChange} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="business_fax_number">
                                                        <Form.Label>Business Fax <span className={styles.requiredfield}> *</span></Form.Label>
                                                        <Form.Control type="tel" placeholder="Enter Fax Number" required onChange={handleBusinessChange} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={12}>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="business_contact_phone_number">
                                                        <Form.Label>Contact Phone NUmber <span className={styles.requiredfield}> *</span></Form.Label>
                                                        <Form.Control type="tel" placeholder="Enter Phone NUmber" required onChange={handleBusinessChange} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3" controlId="business_contact_email_address">
                                                        <Form.Label>Contact Email <span className={styles.requiredfield}> *</span></Form.Label>
                                                        <Form.Control type="email" placeholder="Enter Email Address" required onChange={handleBusinessChange} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Row>
                                <Button className='mx-2 mb-4' variant="outline-primary" type="submit">
                                    Proceed to Upload Files
                                </Button>
                            </Form>
                        </div>
                        <div style={{ height: "20px" }}></div>
                    </Tab>
                    {/* Business Form Tab */}

                    {/* Personal Form Tab */}
                    <Tab eventKey="PersonalForm" title="Personal Form" disabled>
                        <div style={{ height: "10px" }}></div>
                        <div className='px-16' style={{ margin: '10px' }}>
                            <Form onSubmit={handleBusinessPersonalSubmit}>
                                <Row>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="personal_first_name">
                                            <Form.Label>Full Name<span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="First Name" required onChange={handlePersonalChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={1}></Col>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="personal_last_name">
                                            <Form.Label><span style={{ color: "white" }}> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" required onChange={handlePersonalChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="personal_email_address">
                                            <Form.Label>Email Address <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email Address" required onChange={handlePersonalChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="personal_phone_number">
                                            <Form.Label>Phone Number<span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="tel" placeholder="Enter Phone Number" required onChange={handlePersonalChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="personal_institution_name">
                                            <Form.Label>School | College | Institution Name <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="Enter School or College or Institution Name" required onChange={handlePersonalChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={5}>
                                        <Form.Group className="mb-3" controlId="personal_grade_year">
                                            <Form.Label>Grade | Year <span className={styles.requiredfield}> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="Enter Grade or Year" required onChange={handlePersonalChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button className='mt-4 mx-2' variant="outline-primary" type="submit">
                                    Proceed to Upload Files
                                </Button>
                            </Form>
                        </div>
                        <div style={{ height: "40px" }}></div>
                    </Tab>
                    {/* Personal Form Tab */}

                    {/* Upload Files Tab */}
                    <Tab eventKey="uploadFiles" title="Upload Files">
                        <div className="upload-container d-flex" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <div className={`upload-content ${isDragActive ? 'drag-active' : ''}`}>
                                <FaUpload className="upload-icon" />
                                {isDragActive ? (
                                    <p>Drop the files here ...</p>
                                ) : (
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                )}
                            </div>
                        </div>

                        {isFileSelected && (
                            <div className="file-selected-alert text-end">
                                <Button className='mt-4 mx-2' variant="outline-primary" type="submit" onClick={handlePreviewClick}>
                                    Preview
                                </Button>
                            </div>

                        )}
                    </Tab>
                    {/* Upload Files Tab */}

                    {/* Preview Tab */}
                    <Tab eventKey="Preview" title="Preview">
                        {selectedSelectionOption === 'Business' && (
                            <div className='mt-4'>
                                <Table className='text-black' striped bordered hover variant="light">
                                    <thead>
                                        <tr>
                                            <th colSpan="2" style={{ fontSize: "20px" }}>Entered Business Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Business Name:</td>
                                            <td>{`${BusinessFormData.business_first_name} ${BusinessFormData.business_last_name}`}</td>
                                        </tr>
                                        <tr>
                                            <td>Home Address:</td>
                                            <td>{BusinessFormData.business_home_street_address}</td>
                                        </tr>
                                        <tr>
                                            <td>Business Address:</td>
                                            <td>{BusinessFormData.business_street_address}</td>
                                        </tr>
                                        <tr>
                                            <td>City:</td>
                                            <td>{BusinessFormData.business_home_city_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Region:</td>
                                            <td>{BusinessFormData.business_home_region_name}</td>
                                        </tr>
                                        <tr>
                                            <td>Zip Code:</td>
                                            <td>{BusinessFormData.business_home_zipcode}</td>
                                        </tr>
                                        <tr>
                                            <td>Language:</td>
                                            <td>{BusinessFormData.business_home_language}</td>
                                        </tr>
                                        <tr>
                                            <td>Web Address:</td>
                                            <td>{BusinessFormData.business_web_address}</td>
                                        </tr>
                                        <tr>
                                            <td>Business Phone:</td>
                                            <td>{BusinessFormData.business_phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td>Business Fax:</td>
                                            <td>{BusinessFormData.business_fax_number}</td>
                                        </tr>
                                        <tr>
                                            <td>Contact Phone Number:</td>
                                            <td>{BusinessFormData.business_contact_phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td>Contact Email:</td>
                                            <td>{BusinessFormData.business_contact_email_address}</td>
                                        </tr>
                                        <tr>
                                            <td>Business Structure:</td>
                                            <td>{selectedBusinessOption}</td>
                                        </tr>
                                        <tr>
                                            <td>Uploaded file</td>
                                            <td> {uploadedFiles.map((file, index) => (
                                                <div key={index}>
                                                    <img
                                                        src={file.preview}
                                                        alt={`Preview ${file.name}`}
                                                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                                                    />
                                                </div>
                                            ))}</td>
                                        </tr>
                                        <tr>
                                            <td>Uploaded file name</td>
                                            <td>  <div className="uploaded-files">
                                                <div>
                                                    {uploadedFiles.map((file, index) => (
                                                        <p key={index}>
                                                            {file.name}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                        )}

                        {selectedSelectionOption === 'Personal' && (
                            <Table className='text-black' striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th colSpan="2" style={{ fontSize: "20px" }}>Entered Personal Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Full Name:</td>
                                        <td>{`${PersonalFormData.personal_first_name} ${PersonalFormData.personal_last_name}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Email Address:</td>
                                        <td>{PersonalFormData.personal_email_address}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number:</td>
                                        <td>{PersonalFormData.personal_phone_number}</td>
                                    </tr>
                                    <tr>
                                        <td>Institution Name:</td>
                                        <td>{PersonalFormData.personal_institution_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Grade | Year:</td>
                                        <td>{PersonalFormData.personal_grade_year}</td>
                                    </tr>
                                    <tr>
                                        <td>Uploaded file</td>
                                        <td> {uploadedFiles.map((file, index) => (
                                            <div key={index} >
                                                <img
                                                    src={file.preview}
                                                    alt={`Preview ${file.name}`}
                                                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                                                />
                                            </div>
                                        ))}</td>
                                    </tr>
                                    <tr>
                                        <td>Uploaded file name</td>
                                        <td>  <div className="uploaded-files">
                                            <div>
                                                {uploadedFiles.map((file, index) => (
                                                    <p key={index}>
                                                        {file.name}
                                                    </p>
                                                ))}
                                            </div>
                                        </div></td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}
                        <div style={{
                            height: "100px"
                        }}></div>
                    </Tab>
                    {/* Preview Tab */}

                </Tabs>
                {/* Tabs */}

            </Container>
            {/* Container */}

            {/* Bottom Navbar */}
            <Navbar fixed="bottom" expand="lg" bg="light" variant="dark">
                <Container className="text-center">
                    <div style={{ width: '100%' }}>
                        <p className='text-black'>Designed & Developed by Sethu Kishor</p>
                    </div>
                </Container>
            </Navbar>
            {/* Bottom Navbar */}

        </div >
    );
};
