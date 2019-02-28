
import React from 'react';
import Profile from './../Sections/Profile';
import {Container,Row,Col, Navbar, NavbarBrand,UncontrolledDropdown,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import './../Assets/Styles/main.css';
import {Icon} from "../Utility";

class Master extends React.Component {


    state={
        name:'',
        family:''
    };

    constructor(props) {
        super(props);

        // this.toggleNavbar = this.toggleNavbar.bind(this);
        // this.state = {
        //     collapsed: true
        // };
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }


    componentDidMount(){
        // console.log(localStorage.getItem('name'))
       this.getdata();
   }

   getdata=()=>{
        this.setState({        // this.toggle = this.toggle.bind(this);
            // this.state = {
            //     dropdownOpen: false
            // };

            name:localStorage.getItem('name'),
            family:localStorage.getItem('family')
        })
};

    logout=()=>{
        localStorage.removeItem('is_login');
        this.props.history.push('/login');
    };


    // toggleNavbar() {
    //     this.setState({
    //         collapsed: !this.state.collapsed
    //     });
    // }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    render() {
        // console.log(this.state)
        return (
            <Container className='pic'>
              <Row>
                  <Col>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>

                </ButtonDropdown>
                <Navbar className="mt-3">
                    <UncontrolledDropdown inNavbar>
                    <DropdownToggle size='sm' outline  className='m-2'>
                        {<Icon icon={'bars'}/>}
                    </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <a href="https://github.com">Github</a>
                            </DropdownItem>

                            <DropdownItem onClick={this.logout} style={{color:'#007bff'}}>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    {' '}{'   '}
                    <NavbarBrand href="/" className="mr-auto" color='white'>HangOuts</NavbarBrand>

                </Navbar>
                <Profile data={this.state} history={this.props.history}/>
                {
                    this.props.children
                }
                      </Col>
                  </Row>
            </Container>
        )

    }

}
export default Master