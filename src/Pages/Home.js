
import React from 'react';
import { Container,Row,Col,Card, Input ,CardHeader,Label,FormGroup,ListGroup,ListGroupItem} from 'reactstrap';
import Typist  from 'react-typist';
import swal from 'sweetalert';
import chat3 from './../Assets/Images/chat3.jpg';
import robot1 from './../Assets/Images/robot1.png';
import 'hover.css/css/hover-min.css';

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
        console.log(this.state.Newid);
        return(

            <React.Fragment>
                <div class='questiontext'>
                    <Typist  className="TypistExample-header placement" avgTypingSpeed={15000} startDelay={1000}
                             cursor={{show: false}}>
                        <img src={robot1} class="robot"/>
                        <span class="questiondesign">{'   '}Are you ready? </span>
                    </Typist>
                </div>

                <button class="buttons" onClick={()=>{
                    this.setState({
                                    step:'q2'
                    })
                }}>
                   <Icon icon={"check"} className="arrow"/>
                </button>
                <button class="buttons" onClick={this.wait}>
                   <Icon icon={"times"} className="arrow"/>
                </button>


            </React.Fragment>
        )
    };




    q2 = () =>{
        return(
            <React.Fragment>
                <Col className='p-3 mb-4 questiontext'>
                    <Typist  className="TypistExample-header" avgTypingSpeed={10000} startDelay={50}
                              cursor={{show: false}}>
                        <img src={robot1} class="robot"/>
                        <span class="questiondesign"> {this.state.data[this.state.Newid].question}</span>
                    </Typist>
                </Col>
                <div class="inputsborder">
                <input type='text' name={'Newanswer'} value={this.state.Newanswer} class="inputs" onChange={(e) => HandleChange.call(this,e)}/>
                </div>
                    <button  class="bigbuttons" style={{outline:'none'}} onClick={()=>{
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
                </button>
            </React.Fragment>
        )
    };


    q3=()=>{

        return(

            <React.Fragment>
               <div class="p-3 mb-4 questiontext">
                <Typist  className="TypistExample-header" avgTypingSpeed={10000} startDelay={50}
                          cursor={{show: false}}>
                    <img src={robot1} class="robot"/>
                    <span class="questiondesign"> {this.state.data[this.state.Newid].question}</span>
                    </Typist>
                </div>
                <div class="inputyearsborder">
                <input type='number' name={'Newanswer'} value={this.state.Newanswer} class="inputyears" onChange={(e) => HandleChange.call(this,e)}/>

                    <div class="years">
                        <span class="yearscontent">Yearsold</span>
                    </div>
                    </div>
                <button  class="bigbuttons" style={{outline:'none'}} onClick={()=>{
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
                </button>
            </React.Fragment>
        )
    };

    q4=()=>{
        return(
            <React.Fragment>
                <Container className='p-3 mb-4 questiontext'>
                    <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={50}
                             cursor={{show: false}}>
                        <img src={robot1} class="robot"/>
                        <span class="questiondesign">{this.state.data[this.state.Newid].question}</span>
                    </Typist>
                </Container>
                <FormGroup className="mt-5">
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

                <button class="bigbuttons" style={{outline:'none'}} onClick={()=>{

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
                </button>




            </React.Fragment>
        )
    };

    q5 = () =>{
        return(
            <React.Fragment>

                <Col className='p-3 mb-4 questiontext'>

                <Typist  className="TypistExample-header" avgTypingSpeed={15000} startDelay={100}
                         cursor={{show: false}}>
                    <img src={robot1} class="robot"/>
                    <span class="questiondesign">  {this.state.data[this.state.Newid].question}</span>


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


                <button  class="bigbuttons" style={{outline:'none'}} onClick={()=>{
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
                </button>

            </React.Fragment>
        )
    };

    q6 = () =>{
        return(
            <React.Fragment>
                <div class='p-3 mb-4 questiontext'>

                    <Typist  className="TypistExample-header" avgTypingSpeed={10000} startDelay={50}
                             cursor={{show: false}}>

                        <img src={robot1} class="robot"/>

                        <span class={"questiondesign"}>  {this.state.data[this.state.Newid].question}</span>


                    </Typist>

                </div>


                <select class="select"  onChange={(e)=> Handledropdown.call(this,e)}>
                    <option>Select</option>
                    <option value="Running">Running</option>
                    <option value="swimming">Swimming</option>
                    <option value="Biking">Biking</option>
                </select>

                <button  class="bigbuttons" style={{outline:'none'}} onClick={()=>{
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
                </button>
            </React.Fragment>
        )
    };

    q7 = () =>{
        // console.log(this.state.answers);
        return(
            <React.Fragment>

                <Col className="p-3 mb-4 questiontext">

                    <Typist  className="TypistExample-header" avgTypingSpeed={10000} startDelay={50}
                             cursor={{show: false}}>

                        <img src={robot1} class="robot"/>
                        <span class="questiondesign">   {this.state.data[this.state.Newid].question}</span>


                    </Typist>

                </Col>
                <div class="inputsborder">
                <input type='text' name={'Newanswer'} value={this.state.Newanswer} class="inputs" onChange={(e) => HandleChange.call(this,e)}/>
                 </div>
                <button  class="bigbuttons" style={{outline:'none'}} onClick={()=>{
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
            </button>
            </React.Fragment>
        )
    };


    save=()=>{
        return(
            <React.Fragment>
                <div class='p-3 mb-4 questiontext'>

                    <Typist  className="TypistExample-header" avgTypingSpeed={10000} startDelay={50}
                             cursor={{show: false}}>
                        <img src={robot1} class="robot"/>
                        <span class="questiondesign">  I enjoyed to chat with you</span>
                    </Typist>
                </div>
                <Col>
                    <button  class="bigbuttons seebutton" style={{outline:'none'}} onClick={()=>{
                        this.setState({
                                    step:'answer'
                        })

                    }}>
                        See your answer
                    </button>

                    <button class="bigbuttons exitbutton" style={{outline:'none'}} onClick={this.exit}> Exit</button>
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

    wait=()=> {
        swal (' I am waiting for you');
    };




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

                            <button  class="bigbuttons answerbutton" style={{outline:'none'}} onClick={this.exit}> Exit</button>
                        </Col>

                    </Row>
                </Container>
            </React.Fragment>
        )
    };



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
                            <CardHeader className="p-2">

                                <span class="titr"><img alt='image' src={chat3} class="chat"/>  I am a robot.....</span>
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