import React, { useState } from 'react';
import Api from '../Api/Api'
import Display from '../Api/Display/Display';
const User = () => {
    const[user,setUser]=useState(Api)
    const [teem,setTeem]=useState([]);
    console.log(user)
    const addMember=(name)=>{
       setTeem([...teem,name]);
    }
    return (
        <div>
            <h3>Teem Member : </h3>
            <ul>
                {
                    teem.map(m=><li>{m}</li>)
                }
            </ul>
            {
                user.map(data=><Display user={data} addMember={addMember}></Display>)
            }
        </div>
    );
};

export default User;