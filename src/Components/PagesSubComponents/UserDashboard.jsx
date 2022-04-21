import React from 'react'
import Navigation from './Navigation';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'
import { FaLayerGroup, FaHistory, FaRegStar, FaCogs, FaUserCog, FaUserEdit, FaSignOutAlt } from "react-icons/fa";
const UserDashboard = () => {
    return (
        <div>

            <Navigation />
            <Row>
                <Col>
                    <div className="DashItemNames bg-dark text-white text-center py-5">
                        <h3> Dashboard </h3>
                    </div>
                </Col>
            </Row>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3} className="my-5">
                            <Nav variant="pills" className="flex-column bg-white px-3 py-4 rounded  ">
                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="first" > <FaLayerGroup className="mx-2 border" /> Dashboard </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="my-1">
                                    <Nav.Link eventKey="second"> <FaHistory className="mx-2" />  History</Nav.Link>
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
                        <Col sm={9} className="my-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h1>hellooo first</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h2>hello second</h2>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        </div>
    )
}

export default UserDashboard;