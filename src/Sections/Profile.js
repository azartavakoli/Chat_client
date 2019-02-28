import React from 'react';

import './../Assets/Styles/main.css';
import{Container,Row,Col, Card, CardTitle, CardText} from 'reactstrap';


class Profile extends React.Component{

    render(){
        return(
            <Container>
                <Row className="mt-3">
                    <Col md={6} className="m-auto">
                        <Card body color='transparent'className='text-white border-0'>
                            <CardTitle ><h3>Hi , {this.props.data.name } !</h3></CardTitle>
                            <CardText>Get started by answering the questions</CardText>
                        </Card>
                     </Col>
                 </Row>
             </Container>
        )
    };
}


export default Profile;