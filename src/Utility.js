
// import React from 'react';


export function HandleChange(e){
    const {value,name} =e.target;
    this.setState({
        [name]:value
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