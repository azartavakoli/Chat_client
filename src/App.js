
//vendor
 import React from 'react';
 import {Route,Switch} from 'react-router-dom';

//Pages
 import Master from './Pages/Master';
 import Home from './Pages/Home';
 import Login from './Pages/Login';
 import Register from './Pages/Register';
 import NotFound from './Pages/NotFound';

 //Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Styles/main.css';

class App extends React.Component{

    route = [
        {
            exact:true,
            path:'/',
            Component:Home,
            Layout:Master
        },
        {
            exact:true,
            path:'/login',
            Component:Login
        },
        {
            exact:true,
            path:'/register',
            Component:Register
        },
        {
            exact:true,
            Component:NotFound
        }

        ];

    render () {
           return (

               <Switch>
                   {this.route.map(({path,Component,exact,Layout}) => (
                       <Route
                           key={path || 'NotFound'}
                           exact={exact}
                           path={path}
                           Component={Component}
                            render = {(props) =>(

                               Layout ? <Layout {...props}>
                                       <Component {...props}/>
                                   </Layout>
                                   :<Component{...props}/>
                           )}
                       />

                       ) )

                   }

               </Switch>
           )
     }
 }

 export default App;