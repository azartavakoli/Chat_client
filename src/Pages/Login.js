
import React from 'react';

import {Container,Row,Col,Button,InputGroup,InputGroupAddon,Input} from 'reactstrap';
import swal from '@sweetalert/with-react';
import './../Assets/main.css';

import {HandleChange} from "../Utility";

class Login extends React.Component{


    state = {
        username:'',
        password:''
    };

    login = (e) => {
        e.preventDefault();
        if(this.state.username==='hello' && this.state.password==='123'){
            localStorage.setItem('is_login',true);
            // console.log(this.props)
            this.props.history.push('/');
        }else{
            swal(
                <div>

                    <h3>
                        There is an error with your username or password.
                    </h3>
                    <h1>
                        Please try again
                    </h1>
                </div>
            )
        }



    };

    register = (e)=>{
        e.preventDefault();
        this.props.history.push('/register');

    };




    render(){
        return(
            <Container>
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