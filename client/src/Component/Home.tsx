import React, { useEffect, useState } from "react";
import Navabar from "../Layouts/Navabar";
import {useNavigate} from "react-router-dom";


interface IProps{}
interface IState{}

let Home:React.FC<IProps> =() =>{
    const navigate = useNavigate();
    
    
    // let {user} = userState;
    // if(Object.keys(user).length == 0 || user?.isAdmin){
    //     navigate("/") 
    // }
    
    return(
        <>
          <Navabar/>  
          <div className="wrapper">
                <div className="landing">
                    <div className="d-flex flex-column justify-content-center text-center align-items-center h-75 d-inline-block mt-5">
                       <h3>Welcome Assignment</h3> 
                    </div>
                </div>
            </div>
           
        </>
    );

}

export default Home;