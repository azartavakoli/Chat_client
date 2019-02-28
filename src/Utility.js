
import React from 'react';


export function HandleChange(e){
    const {value,name} =e.target;
    this.setState({
        [name]:value
    })
}

export function HandleOption(e) {
    this.setState({
        selectedOption:e.target.value
    })
}

export const protectedpage = (data) =>{
    if(!localStorage.getItem('is_login')){
        data.history.push('/login')
    }
};

export const title =(page)=>{
    document.title =  page
};

// export const Icon =(props)=>{
//
//     const{icon,...other} = props;
//     return(
//         <i{...other} className={`fa fa-${icon}`}/>
//
//     )
// };