
import React from 'react';
import { Container,Row,Col,Card, Input ,Button,CardHeader, CardText,CardBody,Label} from 'reactstrap';
import {protectedpage, title,HandleChange,HandleOption,Handledropdown,Icon} from './../Utility';

class Home extends React.Component{

    constructor(props){
        super(props);
        protectedpage(props);
        title('Home')

    }

    state = {
        step:'q1',
        showing:true,
        count:0,
        inputNew:'',
        selectedOption:'',
        selectId:'',
        answers:[
            {id:0,text:''}
        ],
        Newid:0,
        Newanswer:'',
        data:[
             {id:1,question:'What is your lastname?'},
             {id:2,question:'How old are you?'},
             {id:3,question:'Are you married?'},
             {id:4,question:'Which one is your hobby?'},
             {id:5,question:'which sport do you like?'},
             {id:6,question:'what is your favourite food?'}
             ]
    };


    q1 = () =>{
        return(
            <React.Fragment>
                <Input type='text' name={'Newanswer'} value={this.state.Newanswer} onChange={(e) => HandleChange.call(this,e)}/>
                    <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState(prevState =>{
                                return{
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



                        <Label className="ml-5">
                            <Input type="radio" name="Married"
                                   value={'married'}
                                   checked={this.state.selectedOption === 'married'}
                                   onChange={(e)=> HandleOption.call(this,e)} />Yes,I'm Married
                        </Label><br/>
                     <Label className="ml-5">

                            <Input type="radio" name="single"
                                   value={'single'}
                                   checked={this.state.selectedOption === 'single'}
                                   onChange={(e)=> HandleOption.call(this,e)}/>No,I'm Single
                        </Label>

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
        // console.log(this.state.count);
        // console.log(this.state.Newid);

        return(
            <React.Fragment>

                <Label className="ml-5">
                    <Input type="radio" name="reading"
                           value={'reading'}
                           checked={this.state.selectedOption === 'reading'}
                           onChange={(e)=> HandleOption.call(this,e)} />Reading
                </Label><br/>
                <Label className="ml-5">

                    <Input type="radio" name="play"
                           value={'playing computer game'}
                           checked={this.state.selectedOption === 'playing computer game'}
                           onChange={(e)=> HandleOption.call(this,e)}/>Playing computer game
                </Label><br/>
                <Label className="ml-5">

                    <Input type="radio" name="cooking"
                           value={'cooking'}
                           checked={this.state.selectedOption === 'cooking'}
                           onChange={(e)=> HandleOption.call(this,e)}/>Cooking
                </Label><br/>
                <Label className="ml-5">

                    <Input type="radio" name="play"
                           value={'playing sport'}
                           checked={this.state.selectedOption === 'playing sport'}
                           onChange={(e)=> HandleOption.call(this,e)}/>Playing Sports
                </Label>

                <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState(prevState =>{
                            // console.log(this.state.count)
                                return{
                                    // inputNew:'',
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.selectedOption}],

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

    q5 = () =>{
        return(
            <React.Fragment>



                <select  onChange={(e)=> Handledropdown.call(this,e)}>
                    <option>Select</option>
                    <option value="Running">Running</option>
                    <option value="swimming">Swimming</option>
                    <option value="Biking">Biking</option>
                </select>

                <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState(prevState =>{
                                return{
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.selectId}],
                                    count : ++prevState.count,
                                    // Newid:++prevState.Newid,
                                    step:'q6'
                                    // Newanswer: ''
                                }
                        })
                    }}>
                    Next Question
                </Button>
            </React.Fragment>
        )
    };

    q6 = () =>{
        console.log(this.state.answers);
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
                                    step:'q7',
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
                            <CardHeader className="pt-3 pl-4 pr-4">

                                     I am a robot.....
                                <div style={{display:'inline-block',float:'right'}}>
                                <a href="#" onClick={()=> this.setState({showing:!this.state.showing})}><Icon icon={'chevron-down'} className='mb-1'/></a>
                              </div>
                            </CardHeader>
                                        <CardBody className='p-4'  style={{ display:this.state.showing ? 'block' : 'none'}}>
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