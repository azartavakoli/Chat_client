
import React from 'react';
import { Container,Row,Col,Card, Input ,Button,CardHeader,Label,FormGroup,ListGroup,ListGroupItem} from 'reactstrap';
import Typist  from 'react-typist';
import swal from 'sweetalert';


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
        rotate:'rotate',
        clicked:false,
        addclass:false,
        answers:[

        ],
        Newid:0,
        Newanswer:'',
        data:[

             {id:1,question:'What is your lastname?'},
             {id:2,question:'How old are you?'},
             {id:3,question:'Are you married?'},
             {id:4,question:'Which one is your hobby?'},
             {id:5,question:'which sport do you like?'},
             {id:6,question:'What is your favourite food?'}
             ]
    };


    q1=()=>{
        // console.log(this.state.count);
        console.log(this.state.Newid);
        // console.log(this.state.selectedOption)

        return(

            <React.Fragment>

                <div class='questiontext'>

                    <Typist  className="TypistExample-header placement" avgTypingSpeed={15000} startDelay={1000}
                             cursor={{show: false}}>


                        <span class="questiondesign">Are you ready?</span>


                    </Typist>


                </div>

                <Button className=" float-right" onClick={()=>{

                    this.setState({

                                    step:'q2'

                    })
                }}>
                    Yes
                </Button>
                <Button className=" mr-2 float-right" onClick={this.exit}>
                    No
                </Button>

            </React.Fragment>
        )
    };




    q2 = () =>{
        return(

            <React.Fragment>
                <Col className='p-3 mb-4 questiontext'>
                    <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={50}
                              cursor={{show: false}}>


                                             <span class="questiondesign"> {this.state.data[this.state.Newid].question}</span>
                                           

                    </Typist>


                </Col>


                <Input type='text' name={'Newanswer'} value={this.state.Newanswer} style={{outline:'none'}} onChange={(e) => HandleChange.call(this,e)}/>
                    <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState(prevState =>{
                                return{
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.Newanswer}],
                                    count : ++prevState.count,
                                    Newid:++prevState.Newid,
                                    step:'q3',
                                    Newanswer: ''
                                }
                        })
                    }}>
                    Next Question
                </Button>
            </React.Fragment>
        )
    };

    q3=()=>{

        return(

            <React.Fragment>
               <div class="p-3 mb-4 questiontext">
                <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={1000}
                          cursor={{show: false}}>


                        <span class="questiondesign"> {this.state.data[this.state.Newid].question}</span>


                    </Typist>
                </div>


                <Input type='number' name={'Newanswer'} value={this.state.Newanswer} onChange={(e) => HandleChange.call(this,e)}/>
                <Button  className="mt-2 float-right" onClick={()=>{

                        // console.log(this.state.Newanswer)
                       (this.state.Newanswer>18)?
                    this.setState(prevState =>{
                        return{
                            answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.Newanswer}],
                            Newanswer: '',
                            step:'q4',
                            Newid:prevState.Newid +1,
                            count:++prevState.count
                        }
                    })
                    :
                    this.setState(prevState =>{
                        // answers:[...prevState.answers,{index:prevState.answers.length+1,text:prevState.inputNew}],
                        return{
                            answers:[...prevState.answers,{id:prevState.answers.length-1,text:prevState.Newanswer}],
                            Newanswer: '',
                            step:'q5',
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

    q4=()=>{
        // console.log(this.state.count);
        console.log(this.state.Newid);
        // console.log(this.state.selectedOption)

        return(

            <React.Fragment>

                <Container className='p-3 mb-4 questiontext'>

                    <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={50}
                             cursor={{show: false}}>


                        <span class="questiondesign">{this.state.data[this.state.Newid].question}</span>


                    </Typist>


                </Container>


                <FormGroup>

                    <Label className="ml-5 color">

                        <Input type="radio" name="Married"
                               value={'YES'}
                               checked={this.state.selectedOption === 'YES'}
                               onChange={(e)=> HandleOption.call(this,e)}/>Yes,I'm Married
                    </Label>


                    < Label className="ml-5 color">

                        <Input type="radio" name="single"
                               value={'NO'}
                               checked={this.state.selectedOption === 'NO'}
                               onChange={(e)=> HandleOption.call(this,e)}/>No,I'm Single
                    </Label>

                </FormGroup>

                <Button className="mt-2 float-right" onClick={()=>{

                    this.setState(prevState =>{
                       return{
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.selectedOption}],
                                    Newanswer: '',
                                    step:'q5',
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

    q5 = () =>{
        console.log('q4');
        console.log(this.state.Newid);

        return(
            <React.Fragment>

                <Col className='p-3 mb-4 questiontext'>

                <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={100}
                         cursor={{show: false}}>


                    <span class="questiondesign">{this.state.data[this.state.Newid].question}</span>


                </Typist>
                    </Col>


                <Label className="ml-5 color">
                    <Input type="radio" name="reading"
                           value={'reading'}
                           checked={this.state.selectedOption === 'reading'}
                           onChange={(e)=> HandleOption.call(this,e)} />Reading
                </Label>

                    <br/>

                <Label className="ml-5 color">

                    <Input type="radio" name="play"
                           value={'playing computer game'}
                           checked={this.state.selectedOption === 'playing computer game'}
                           onChange={(e)=> HandleOption.call(this,e)}/>Playing computer game
                </Label>

                    <br/>

                <Label className="ml-5 color">

                    <Input type="radio" name="cooking"
                           value={'cooking'}
                           checked={this.state.selectedOption === 'cooking'}
                           onChange={(e)=> HandleOption.call(this,e)}/>Cooking
                </Label>

                    <br/>

                <Label className="ml-5 color">

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
                                    step:'q6',
                                    Newanswer: ''
                                }
                        })
                    }}>
                    Next Question
                </Button>

            </React.Fragment>
        )
    };

    q6 = () =>{
        return(
            <React.Fragment>
                <div class='p-3 mb-4 questiontext'>

                    <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={1000}
                             cursor={{show: false}}>


                        <span class={"questiondesign"}>{this.state.data[this.state.Newid].question}</span>


                    </Typist>

                </div>


                <select class="ml-3 color"  onChange={(e)=> Handledropdown.call(this,e)}>
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
                                    Newid:++prevState.Newid,
                                    step:'q7'
                                    // Newanswer: ''
                                }
                        })
                    }}>
                    Next Question
                </Button>
            </React.Fragment>
        )
    };

    q7 = () =>{
        // console.log(this.state.answers);
        return(
            <React.Fragment>

                <Col className="p-3 mb-4 questiontext">

                    <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={1000}
                             cursor={{show: false}}>


                        <span class="questiondesign">{this.state.data[this.state.Newid].question}</span>


                    </Typist>

                </Col>

                <Input type='text' name={'Newanswer'} value={this.state.Newanswer} onChange={(e) => HandleChange.call(this,e)}/>

                <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState(prevState =>{
                            // console.log(this.state.count)
                                return{
                                    // inputNew:'',
                                    answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.Newanswer}],

                                    count : ++prevState.count,
                                    Newid:++prevState.Newid,
                                    step:'save',
                                    Newanswer: ''
                                }
                        })

                    }}>
                Next Question
            </Button>
            </React.Fragment>
        )
    };


    save=()=>{
        return(
            <React.Fragment>
                <div class='p-3 mb-4 questiontext'>

                    <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={1000}
                             cursor={{show: false}}>


                        <span class="questiondesign">I enjoyed to chat with you</span>


                    </Typist>

                </div>

                <Col>

                    <Button  className=" mt-2 float-right" onClick={()=>{
                        this.setState({
                                
                                    step:'answer'
                               
                        })

                    }}>
                        See your answer
                    </Button>

                    <Button onClick={this.exit}> Exit</Button>
                </Col>


            </React.Fragment>
        )



    };

        exit=()=>{
            swal("Are you sure?", {
                dangerMode: true,
                buttons: true
            }).then((res) =>{
                if (res) {
                    localStorage.removeItem('is_login');
                    this.props.history.push('/login');
                }else{
                    swal.stopLoading();
                    swal.close();
                }
            }).catch(err =>{
                console.log(err);
            })
        };


        //     swal("Are you sure you want to do this?", {
        //         buttons: ["no", true],
        //     });
        //     console.log(this.props)
        //     localStorage.removeItem('is_login');
        //     this.props.history.push('/login');
        // };

    answer=()=> {
        // console.log (this.state.answers)
        return(
            <React.Fragment>
                <Container>
                    <Row xs={9}>
                        <Col>
                            <ListGroup>
                                {
                                    this.state.answers.map((element)=>{
                                        return(
                                            <ListGroupItem key={element.id}>
                                                {this.state.data[element.id].question}{element.text}
                                            </ListGroupItem>
                                        )

                                    } )
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    };


    // next = ()=>{
    //     return(
    //     <Label className="ml-5">
    //         <Input type="radio" name="Married"
    //                value={'married'}
    //                checked={this.state.selectedOption === 'married'}
    //                onChange={(e)=> HandleOption.call(this,e)} />Yes,I'm Married
    //     </Label>
    //
    //
    //
    //     <Label className="ml-5">
    //
    //         <Input type="radio" name="single"
    //     value={'single'}
    //     checked={this.state.selectedOption === 'single'}
    //     onChange={(e)=> HandleOption.call(this,e)}/>No,I'm Single
    //     </Label>
    //
    //
    //     <Button className="mt-2 float-right" onClick={()=>{
    //
    //         this.setState(prevState =>{
    //             return{
    //                 answers:[...prevState.answers,{id:prevState.answers.length,text:prevState.selectedOption}],
    //                 Newanswer: '',
    //                 step:'q4',
    //                 Newid:++prevState.Newid,
    //                 count :++prevState.count
    //
    //
    //             }
    //
    //         })
    //     }}>
    //     Next Question
    //     </Button>
    //
    //
    //     )
    //
    //
    // };

    toggle = ()=>{
    this.setState({
    showing:!this.state.showing,
        addClass: !this.state.addClass
})
};



    render(){
        let boxClass = ["closechat1 closechat2 closechat3"];
        if(this.state.addClass) {
            boxClass.push('rotate');
        }
        return (
            <Container>
                <Row>
                    <Col md={9} className="box">
                        <Card>
                            <CardHeader className="titrbox">

                                <span class="titr"> I am a robot.....</span>
                                <div style={{display:'inline-block',float:'right'}}>
                                    <button class={boxClass.join(' ')} style={{outline:'none'}} onClick={(this.toggle)}>
                                        <Icon icon={'chevron-up'} className='arrow'/></button>
                                </div>
                            </CardHeader>
                         </Card>
                            <div class={'boxdown'}  style={{ display:this.state.showing ? 'block' : 'none'}}>

                                <div>{this[this.state.step]()}</div>

                            </div>
                    </Col>
                </Row>
            </Container>
        )
    };
}

export default Home;