
import React from 'react';

import {protectedpage} from './../Utility';

class Home extends React.Component{

    constructor(props){
        super(props);
        protectedpage(props)
    }


    render(){
        return <div> HOME </div>
    }
}

export default Home;