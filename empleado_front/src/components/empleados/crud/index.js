import React from 'react';
import { Container, Row, Nac } from 'react-bootstrap';
import Empleados from '.crud/buscar';
import './empleados';

export default class Empleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "buscar"
        };
    }
    render() {
        return (
            <Container id="empleados-container">
                <Row>
                    <Nav fill variant="tabs" 
                    defaultActiveKey="/buscar"
                    onSelect={(eventKey) => 
                        this.setState({ currentTab: eventKey})}
                    >
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Crear</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? ( 
                    <EmpleadosBuscar /> 
                    ) : (
                        <EmpleadosCrear />
                    )}
                </Row>
            </Container>
        );
    }
}

