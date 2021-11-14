import React from 'react';
import { BrowserRouter as Router, 
    Route, 
    Switch 
} from 'react-router-dom';

import Login from "../login/login"
import privateRoute from "../auth/privateroute";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component={Login} />
                <privateRoute exact path="/home" component={Home} /> 
                <Route
                    path={"*"}
                    component={() => {
                        <h2 style={{ marginTop: 200}}>
                            404 - Not Found
                            <br />
                            PAGINA NO ENCONTRADA
                        </h2>
                    }}
                />
            </Switch>
        </Router>   
    );
}
function Home() {
    return <h2>BIENVENIDOS A HOME</h2>;
}
