
import React from 'react';
import { Container,Row,Col,Card, Input ,Button, CardTitle, CardText, CardHeader,CardBody,Table} from 'reactstrap';
import {protectedpage, title,HandleChange,HandleOption} from './../Utility';

class Home extends React.Component{

    constructor(props){
        super(props);
        protectedpage(props);
        title('Home')

    }

    state = {
        step:'q1',
        count:0,
        inputNew:'',
        selectedOption:'',
        answers:[
            {id:0,text:''}
        ],
        Newid:0,
        Newanswer:'',
        data:[
             {id:1,question:'What is your lastname?'},
             {id:2,question:'How old are you?'},
             {id:3,question:'Are you married?'},

             {id:4,question:'What is your hoppy?'},
             {id:5,question:'which sport do you like?'}
             ]
    };


    q1 = () =>{
                // console.log(this.state.data)
        return(
            <React.Fragment>
                <Input type='text' name={'Newanswer'} value={this.state.Newanswer} onChange={(e) => HandleChange.call(this,e)}/>

                    <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState(prevState =>{
                            // console.log(this.state.count)
                                return{
                                    // inputNew:'',
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.Newanswer}],

                                    count : ++prevState.count,
                                    Newid:++prevState.Newid,
                                    step:'q2',
                                    Newanswer: ''
                                }
                        })
                    }}>
                    Next Question
                </Button>
            </React.Fragment>
        )
    };

    q2=()=>{
        // console.log(this.state.answers[this.state.count].text);
        // console.log(this.state.count);
        // console.log(this.state.Newid);
        return(

            <React.Fragment>
                <Input type='number' name={'Newanswer'} value={this.state.Newanswer} onChange={(e) => HandleChange.call(this,e)}/>
                <Button  className="mt-2 float-right" onClick={()=>{

                        // console.log(this.state.Newanswer)
                       (this.state.Newanswer>18)?
                    this.setState(prevState =>{
                        return{
                            answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.Newanswer}],
                            Newanswer: '',
                            step:'q3',
                            Newid:++prevState.Newid,
                            count:++prevState.count
                        }
                    })
                    :
                    this.setState(prevState =>{
                        // answers:[...prevState.answers,{index:prevState.answers.length+1,text:prevState.inputNew}],
                        return{
                            answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.Newanswer}],
                            Newanswer: '',
                            step:'q4',
                            Newid:prevState.Newid+2,
                            count : ++prevState.count
                        }
                    })
                }}>
                    Next Question
                </Button>
            </React.Fragment>
        )
    };

    q3=()=>{
        // console.log(this.state.count);
        // console.log(this.state.Newid);
        // console.log(this.state.selectedOption)
        return(

                <React.Fragment>

                    <Table className="radio">
                        <tbody>
                        <tr>
                            <td>
                        <Input type="radio" name="Married"
                               value={'married'}
                               checked={this.state.selectedOption === 'married'}
                               onChange={(e)=> HandleOption.call(this,e)} />Yes,I'm Married
                            </td>
                            <td>
                                <Input type="radio" name="single"
                                       value={'single'}
                                       checked={this.state.selectedOption === 'single'}
                                       onChange={(e)=> HandleOption.call(this,e)}/>No,I'm Single
                             </td>
                        </tr>
                        </tbody>
                    </Table>
                <Button className="mt-2 float-right" onClick={()=>{

                    this.setState(prevState =>{
                       return{
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.selectedOption}],
                                    Newanswer: '',
                                    step:'q4',
                                    Newid:++prevState.Newid,
                                    count :++prevState.count


                                }

                    })
                }}>
                    Next Question
                </Button>




            </React.Fragment>
        )
    };

    q4 = () =>{
        console.log(this.state.answers);
        // console.log(this.state.count);
        // console.log(this.state.Newid);

        return(
            <React.Fragment>
                <Input type='text' name={'Newanswer'} value={this.state.Newanswer} onChange={(e) => HandleChange.call(this,e)}/>

                <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState(prevState =>{
                            // console.log(this.state.count)
                                return{
                                    // inputNew:'',
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.Newanswer}],

                                    count : ++prevState.count,
                                    Newid:++prevState.Newid,
                                    step:'q5',
                                    Newanswer: ''
                                }
                        })
                    }}>
                    Next Question
                </Button>

            </React.Fragment>
        )
    };





    // save=()=>{
    //    this.Setstate((prevState)=>{
    //        return{
    //            answers:[...prevState.answers,{index:prevState.answers.length+1,text:prevState.inputNew}],
    //            inputNew: ''
    //        }
    //    })
    // }


    render(){
        // console.log(this[this.state.step]())
        return (
            <Container>
                <Row>
                    <Col md={9} className="box">
                        <Card>
                            <CardHeader> Please answer</CardHeader>
                                        <CardBody className='p-4'>
                                            <CardTitle className="ml-2" style={{color:'#007bff'}}>{`Question ${this.state.data[this.state.count].id}:`}</CardTitle>
                                            <CardText className="ml-2" style={{color:'#db490efc'}}>{this.state.data[this.state.Newid].question}</CardText>

                                            <CardText>{this[this.state.step]()}</CardText>

                                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    };
}

export default Home;