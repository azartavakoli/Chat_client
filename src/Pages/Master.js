
import React from 'react';
import Profile from './../Sections/Profile';

class Master extends React.Component {


    state={
        name:'',
        family:''
    };

   componentDidMount(){
        // console.log(localStorage.getItem('name'))
       this.getdata();
   }

   getdata=()=>{
        this.setState({
            name:localStorage.getItem('name'),
            family:localStorage.getItem('family')
        })
};



    render() {
        // console.log(this.state)
        return (
            <div>
                <Profile data={this.state} history={this.props.history}/>
                {
                    this.props.children
                }
            </div>
        )

    }

}
export default Master