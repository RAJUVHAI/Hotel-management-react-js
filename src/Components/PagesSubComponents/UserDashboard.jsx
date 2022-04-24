import React from 'react'
import Navigation from './Navigation';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'
import './UserDashboard.css'
import { FaLayerGroup, FaHistory, FaRegStar, FaCogs, FaUserCog, FaUserEdit, FaSignOutAlt, FaRegEnvelope, FaHotel, FaStar } from "react-icons/fa";
const styles = {
    Overflows: {
        overflow: "hidden"
    },
    fontSize: {
        fontSize: "55px"
    }
}


const UserDashboard = () => {
    return (
        <div style={styles.Overflows}>

            <Navigation />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col>
                        <div className="DashItemNames bg-dark text-white text-center py-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h1>Dashboard</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h1>History</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <h1>Reeviews</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <h1>Support Ticket</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <h1>Profile Setting</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <h1>Change Password</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                    <h1>Log Out</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col sm={4} lg={3} md={3} className="my-5 ">
                            <Nav variant="pills" className="flex-column bg-white shadow-md  px-3 py-4 rounded  ">
                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="first" > <FaLayerGroup className="mx-2 text-center-sm" /> Dashboard </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="second"> <FaHistory className="mx-2 text-center" />  History</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="three"> <FaRegStar className="mx-2" />  Reviews</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="four"> <FaCogs className="mx-2" /> Support Tickets</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="five"> <FaUserCog className="mx-2" /> Profile Setting</Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="six"> <FaUserEdit className="mx-2" />  Change Password </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="seven"> <FaSignOutAlt className="mx-2" /> Log Out </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8} lg={9} md={9} className="my-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="totalticket shadow-sm  rounded bg-white p-2 d-flex justify-content-start">
                                                <div className="ticketIcon  p-2 mt-2 ">
                                                    <FaRegEnvelope style={styles.fontSize} className="envelop  p-2 rounded text-primary  bg-primary bg-opacity-25 text-center" />
                                                </div>
                                                <div className="CountTxt pt-2 px-3">
                                                    <span style={{ fontSize: "25px" }}>0</span>
                                                    <p>Total Tickets</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="totalticket shadow-sm  rounded bg-white p-2 d-flex justify-content-start">
                                                <div className="ticketIcon  p-2 mt-2 ">
                                                    <FaHotel style={styles.fontSize} className="envelop  p-2 rounded text-primary  bg-primary bg-opacity-25 text-center" />
                                                </div>
                                                <div className="CountTxt pt-2 px-3">
                                                    <span style={{ fontSize: "25px" }}>0</span>
                                                    <p>Total Booked</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="totalticket shadow-sm  rounded bg-white p-2 d-flex justify-content-start">
                                                <div className="review__Icon  p-2 mt-2 ">
                                                    <FaStar style={styles.fontSize} className="envelop  p-2 rounded text-primary  bg-primary bg-opacity-25 text-center" />
                                                </div>
                                                <div className="CountTxt pt-2 px-3">
                                                    <span style={{ fontSize: "25px" }}>0</span>
                                                    <p>Total Reviews</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className=" my-5 bg-white rounded py-3 shadow-sm">
                                                <div className="tableContents d-flex px-3 justify-content-between">
                                                    <h4> Booking History </h4>
                                                    <button className="btn btn-primary">View All</button>
                                                </div>
                                                <hr></hr>


                                                <div>
                                                    <table className="table  table-hover  ">
                                                        <thead className="bg-primary text-light">
                                                            <tr>
                                                                <th scope="col">id</th>
                                                                <th scope="col">First</th>
                                                                <th scope="col">Last</th>
                                                                <th scope="col">Handle</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='m-2'>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">4</th>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">5</th>
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h1>hello second</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <h1>hellooo three</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <h1>hellooo four</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <h1>hellooo five</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <h1>hellooo six</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                    <h1>hellooo seven</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Container>

            </Tab.Container>

        </div >
    )
}

export default UserDashboard;