import React from "react";
import "../empleados.css";
import { Container, Row } from "react-bootstrap";
import DataGrid from "../../grid/grid";


const columns = [
{
    dataField: '_id',
    text: 'ID',
    hidden: true,
}, 
{
    dataField: 'nombre',
    text: 'Nombre'
}, 
{
    dataField: 'apellido_p',
    text: 'Primer Apellido'
},
{
    dataField: 'apellido_m',
    text: 'Segundo Apellido'
},
{
    dataField: 'telefono',
    text: 'Telefono'
},
{
    dataField: 'mail',
    text: 'Correo Electronico'
},
{
    dataField: 'direccion',
    text: 'Direccion'
}
];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        
    }
    render() {
        return ( 
            <Container id="empleados-buscar-container">
                <Row>  
                <h2>BUSCAR EMPLEADOS</h2>
                </Row>
                <Row>
                
                    <DataGrid url="/empleados" columns={columns}/>
                
                </Row>
            </Container>
        );
    }
}
