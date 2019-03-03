
import React from 'react';

import {Container,Row,Col,Button,InputGroup,InputGroupAddon,Input} from 'reactstrap';
import swal from '@sweetalert/with-react';
import '../Assets/Styles/main.css';

import {HandleChange,title} from "../Utility";

class Login extends React.Component{

    constructor(props){
        super(props);
        title('Login');
        if(localStorage.getItem('is_login')){
            props.history.push('/')
        }
    }


    state = {
        username:'',
        password:''
    };

    login = (e) => {
        e.preventDefault();
        const user=localStorage.getItem('username');
        const pass=localStorage.getItem('password');
        if(this.state.username===user && this.state.password===pass && this.state.pass!==null && this.state.username!==null){
            localStorage.setItem('is_login',true);
            // console.log(this.props)
            this.props.history.push('/');
            
        }else{
            swal(
                <div>

                    <span>
                         username or password is wrong.
                    </span>
                    <h3>
                        Please try again
                    </h3>
                </div>
            )
        }



    };

    register = (e)=>{
        e.preventDefault();
        if(!localStorage.getItem('is_login')){
            this.props.history.push('/register');
        }else{
            this.props.history.push('/');
        }

    };




    render(){
        return(
            <Container className="main p-5">
                <Row>
                    <Col md={6} className='m-auto'>
                        <InputGroup className={'input-user'}>
                            <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                            <Input  type='text' name='username' require='true' value={this.state.username} onChange={(e) => HandleChange.call(this,e)} placeholder="username" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='input-pass m-auto'>
                        <InputGroup className={'input-user'}>
                            <InputGroupAddon addonType="prepend"> PassWord</InputGroupAddon>
                            <Input  type='password' name={'password'} require='true' value={this.state.password} placeholder="password"  onChange={(e) => HandleChange.call(this,e)} />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='m-auto clearfix' style={{ padding: '.5rem' }}>
                        <Button onClick={this.login} color="primary" size="lg" className='btn float-left mt-5'> Login </Button>{'  '}
                        <Button  onClick={this.register} color="primary" size="lg" className='float-right mt-5'>Register</Button>
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default Login;