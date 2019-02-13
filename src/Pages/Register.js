import React from 'react';

import { Container,Row,Col, Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {HandleChange,title} from "../Utility";

class Register extends React.Component{

    constructor(props){
        super(props);
        title('Register');
    }

    state={
        name:'',
        family:'',
        email:'',
        username:'',
        password:''
    };

    submit=()=>{

        localStorage.setItem('name',this.state.name);
        localStorage.setItem('family',this.state.family);
        localStorage.setItem('username',this.state.username);
        localStorage.setItem('password',this.state.password);
        this.setState({
            name:this.state.name,
            family:this.state.family
        });
        this.props.history.push('/login')
    };

    render(){
        // console.log(this.state)
        return(



            <Container>

                <Row>
                    <Col md={6} className='m-auto'>
                        <Form>
                            <FormGroup>
                                <Label for="Name"> First Name*</Label>
                                <Input type="text" name="name" value={this.state.name} id="Name" block placeholder="Name*" onChange={(e)=>HandleChange.call(this,e)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Family">Last Name*</Label>
                                <Input type="text" name="family" value={this.state.family} id="Family" block placeholder="Family" onChange={(e)=>HandleChange.call(this,e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email Address*</Label>
                                <Input type="email" name="email" value={this.state.email} id="Email" block placeholder="Email" onChange={(e)=>HandleChange.call(this,e)}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="username">UserName*</Label>
                                <Input type="text" name="username" value={this.state.username} id="username" block placeholder="username" onChange={(e)=>HandleChange.call(this,e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password*</Label>
                                <Input type="password" name="password" value={this.state.password} id="Password" block placeholder="Password" onChange={(e)=>HandleChange.call(this,e)} />
                            </FormGroup>
                        </Form>
                        <div> *Required fields</div>
                        <Button onClick={this.submit} block>
                            Create my account
                        </Button>
                    </Col>

                </Row>
            </Container>
        )

    }
}

export default Register;