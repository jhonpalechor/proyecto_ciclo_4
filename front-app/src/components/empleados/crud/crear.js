import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';


export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empleados: {
                nombre: "",
                apellido_p:"",
                apellido_m:"",
                telefono:"",
                mail:"",
                direccion:""
            }
        }
    }

    setValue(index, value){
        this.setState({
            empleados:{
                ...this.state.empleado,
                [index] : value,
            },
        });
    }

    render() { 
        return (
            <Container id="empleados-crear-container">
                <Row>
                    <h2>CREAR EMPLEADOS</h2>
                </Row>
                <Row className="form-container">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("nombre", e.targert.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("apellido_p", e.targert.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("apellido_m", e.targert.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("telefono", e.targert.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("mail", e.targert.value)}
                        />
                        <Form.Group className="mb-3" >
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control 
                            onChange={(e)=> this.setValue("direccion", e.targert.value)}
                        />
                    </Form.Group>
                    </Form.Group>
                    <Button variant="primary" onClick={()=> console.log(this.state)}>
                        Guardar empleado
                    </Button>
                </Form>
                </Row>
            </Container>
        );
    }
}

