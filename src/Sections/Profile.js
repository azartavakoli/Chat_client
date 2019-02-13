import React from 'react';

import{Container,Row,Col,Button} from 'reactstrap';


class Profile extends React.Component{

  logout=()=>{
      localStorage.removeItem('is_login');
      this.props.history.push('/login');
  };



    render(){
      console.log(this.props.data.name);
        return(
            <Container>
                <Row>
                    <Col>
                        First Name: {this.props.data.name }
                    </Col>
                    <Col>
                        Last Name:{this.props.data.family}
                    </Col>
                    <Col>
                        <Button onClick={this.logout}>
                                LOGOUT
                        </Button>
                    </Col>

                </Row>
            </Container>
        )
    }
}


export default Profile;