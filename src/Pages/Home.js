
import React from 'react';

import {protectedpage, title} from './../Utility';

class Home extends React.Component{

    constructor(props){
        super(props);
        protectedpage(props);
        title('Home')
    }


    render(){
        return <div> HOME </div>
    }
}

export default Home;