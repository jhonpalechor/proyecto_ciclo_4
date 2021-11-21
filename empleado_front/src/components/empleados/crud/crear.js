import React from 'react';
import {Container, Row} from 'react-bootstrap';
export default class EmpleadosCrear  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            empleados: {
                nombre: '',
                apellido_p: '',
                apellido_m: '',
                telefono: '',
                mail: '',
                direccion: '',
            }
        };
    }

    setValue(index, value) {
        this.setValue({ 
            empleados: {
                ...this.state.empleados,
                [index]: value,
            },
            });
    }
    render() { 
        return ( 
            <Container id="empleados-crear-container">
                <Row>
                    <h2>Crear Empleado</h2>
                </Row>
                
                <Row>
                <Form>
                    <Form.Group className="mb_3" controlId="frombasicEmail">
                        <Form.Label></Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        onChange={(e) => this.setValue('nombre', e.target.value)}
                    />
                    </Form.Group>   
                    <Form.Group className="mb_3" controlId="frombasicEmail">
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control 
                        onChange={(e) => this.setValue('apellido_p', e.target.value)}
                    />
                    </Form.Group> 
                    <Form.Group className="mb_3" controlId="frombasicEmail">
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control 
                        onChange={(e) => this.setValue('apellido_m', e.target.value)}
                    />
                    </Form.Group> <Form.Group className="mb_3" controlId="frombasicMail">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control 
                        onChange={(e) => this.setValue('telefono', e.target.value)}
                    />
                    </Form.Group> 



            </Container>
            );
    }
}
