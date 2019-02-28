import React from 'react';

import { Container,Row,Col, Button,CardBody, Input,Card,CardHeader, CardTitle, CardText, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap'
import {HandleChange,title,Icon} from "../Utility";


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
                    <Col md={6} className='mr-auto ml-auto mt-4'>
                        <Card color='info'>
                            <CardHeader><h2> Register</h2></CardHeader>
                            <CardBody>
                            <CardTitle>Create your account</CardTitle>
                            <CardText>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend" >
                                        <InputGroupText>
                                            {<Icon icon={'user-circle-o'}/>}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text"  name="name" value={this.state.name} id="Name" block placeholder="FirstName*" onChange={(e)=>HandleChange.call(this,e)}/>
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {<Icon icon={'user-circle-o'}/>}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" name="family" value={this.state.family} id="Family" block placeholder="LastName*" onChange={(e)=>HandleChange.call(this,e)} />
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {<Icon icon={'envelope'}/>}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="email" name="email" value={this.state.email} id="Email" block placeholder="Email" onChange={(e)=>HandleChange.call(this,e)}/>
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {<Icon icon={'user'}/>}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" name="username" value={this.state.username} id="username" block placeholder="username*" onChange={(e)=>HandleChange.call(this,e)} />
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            {<Icon icon={'lock'}/>}
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="password" name="password" value={this.state.password} id="Password" block placeholder="Password*" onChange={(e)=>HandleChange.call(this,e)} />
                                </InputGroup>

                            </CardText>
                              <div> *Required fields</div>
                              <br/>
                              <Button onClick={this.submit} block>
                                   Create my account
                              </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default Register;