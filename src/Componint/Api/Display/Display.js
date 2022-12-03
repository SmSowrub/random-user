import React, { useState } from 'react';
import './Display.css';
const Display = (props) => {
    const {title,description,image,phone,mentor}=props.user;
    const addMember=props.addMember;
    const [mobile,setMobile]=useState('');
    const showPhone=()=>setMobile(phone);
    return (
        <div className='display'>
            <div className='displayImg'>
               <img style={{width:'200px'}} src={image} alt=""/> 
            </div>
            <div>
                <h2>Name : {mentor}</h2>
                <h5>Title : {title}</h5>
                <p>{description}</p>
                <p>Phone:{mobile}</p>
                <button onClick={showPhone}>Show Phone Number</button>
                <button onClick={()=>addMember(mentor)}>Add</button>
            </div>
        </div>
    );
};

export default Display;