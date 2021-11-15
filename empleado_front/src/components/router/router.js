import React from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Login from "../login/login"
import PrivateRoute from '../auth/privateroute';


export default function AppRouter(){
    return(
        <Router>
            <Switch>
                <Route exact path={["/", "/login"]} component = {Login}/>
                <PrivateRoute exact path="/home" component={Home} />
                <Route 
                path={'*'} 
                component={() => (
                    <h2 style={{ marginTop: 200}}>
                    404
                    <br />
                    pagina no encontrada
                    </h2>
                )} 
                />

            </Switch>
        </Router>
    )
}

function Home(){

    return <h2>HOME</h2>;
}
 

// function Home(){
//     return (
//         <div>
//             <h2 style={{ margintop:200}}> ESTE ES HOME</h2> 
//         </div>
//     );
// }
