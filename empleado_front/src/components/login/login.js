import React from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { APIHOST as host } from '../app.json';
import './login.css';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaEspiracionSesion } from '../helper/helper';
import Loading from '../loading/loading';

const cookies = new Cookies();


export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            loading: false,
            usuario:'',
            pass:'',
        };
        /* comentario */
    }
     iniciarSesion(){
   
       this.setState({loading: true });
      axios.post(`${host}/usuarios/login`,{
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response)=> {
        if (isNull(response.data.token)) {
          alert('usuario y/o contraseña invalidas');
        } else {
          cookies.set('_s', response.data.token, {
           path: '/',
            expires: calculaEspiracionSesion(),
          });
        }
        this.setState({loading: false });

      })
      .catch((err) => {
        console.log(err);
        this.setState({loading: false });
      });

    }
      // alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`); //ventana emegrgente!!

     
    render() { 
        return ( 
          <Container id="login-container" > 

                <Loading show={this.state.loading} />

              <Row>
               <Col>
                <Row>
                    <h2> Iniciar sesion</h2>
                    </Row>
                    
                        <Row>
                        <Col
                        sm="12"
                        xs="12"
                        md={{ span:4, offset:4 }}
                        lg={{ span:4, offset:4 }}
                        xl={{ span:4, offset:4 }}
                        >
                        

              <Form>
  <Form.Group >
    <Form.Label >Usuario</Form.Label>
    <Form.Control 
    onChange={(e) =>
        this.setState({ usuario: e.target.value})
    }
    />
    {/* {this.state.usuario} para que muestre que captura datos se debe borrar!!!*/} 
   </Form.Group>

  <Form.Group >
    <Form.Label >Contraseña</Form.Label>
    <Form.Control 
    type="password"  
    onChange={(e) =>
        this.setState({ pass: e.target.value})
    }
    />
    
    {/* {this.state.pass} */}
  </Form.Group>
  <Button 
  variant="primary" 
   
    //   para que haga click en el boton
      onClick= { () => {   
        this.iniciarSesion();
      }}
      >
      Iniciar sesión
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
 
