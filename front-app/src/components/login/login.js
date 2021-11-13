import React from 'react';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './login.css'

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuario:'',
            pass:'',
        };
    }
    iniciarSesion(){
        alert(`usuario: ${this.state.usuario} contraseña:${this.state.pass}`);
    }
    render() { 
        return ( 
            <Container id="login-container">
                <Row>
                    <Col>
                    <Row>
                        <h2>Inicio de Sesión</h2>
                    </Row>
                    <Row>
                    <Col
                        sm="12"
                        xs="12"
                        md={{span: 4, offset:4}}
                        lg={{span: 4, offset:4}}
                        xl={{span: 4, offset:4}}
                        >
                <Form>
                    <Form.Group >
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control placeholder="Usuario" 
                    onChange={(e)=>
                        this.setState({usuario: e.target.value})
                    }
                    />
                    </Form.Group>
                    <Form.Group >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña"
                    onChange={(e)=>
                        this.setState({pass: e.target.value})
                    }
                    />
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    style={{ 
                        marginTop: 20,
                        width: "100%"
                    }}
                    onClick={()=>{
                        this.iniciarSesion();
                    }}
                    >
                        Iniciar Sesión
                    </Button>
                </Form>
                </Col>
                </Row>
                </Col>
                </Row>
            </Container>
        );
    }
}

