import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import Navabar from "../Layouts/Navabar";
import {useNavigate} from "react-router-dom";
import { Dropdown  } from 'react-bootstrap';
import { Axios } from "axios";
import UserService from "../Services/UserService";

interface IProps{}
interface IState{}

let Insert:React.FC<IProps> =() =>{
    const navigate = useNavigate();
    
    const [validated, setValidated] = useState(false);

    const [user, setUsers] = useState<any>({
        name: "",
        email: "",
        roles: "",
    });

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsers((prevState: any) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })

    };

    let [Roles, setRoles] = useState([]);

    useEffect(()=>{
        UserService.getARoles().then((response)=>{
            setRoles(response.data);
        })
    },[])

    // const Roles =  
    // ['Admin', 'User', 'Client', 'Tester']; 

    const updateSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
       
        var role = user.roles;
        if(role == ''){
            role=event.target.value;
        }else{
            if(!role.includes(event.target.value)){
                role=role+','+event.target.value;
            }
        }
        
        setUsers((prevState: any) => {
            return {
                ...prevState,
                roles: role
            }
        })
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            UserService.addUser(user).then((response)=>
            {
                navigate("/view")
            }
            ).catch(
                (error)=>{
                    alert("Somthing Went Wrong!.");
                }
            );
        }
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

 
    const toggleRole = (option: string) => { 
        
        var role = user.roles;
        if(role == ''){
            role=option;
        }else{
            if(!role.includes(option)){
                role=role+','+option;
            }
        }
        
        setUsers((prevState: any) => {
            return {
                ...prevState,
                roles: role
            }
        })

    }; 

    const handleReset = () =>{
        setUsers((prevState: any) => {
            return {
                name:'',
                email:'',
                roles: '',
            }
        })
    }
    
    return(
        <>
            <Navabar/>  
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Insert Records</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input 
                            className="form-control" 
                            value={user.name}
                            name={'name'}
                            onChange={updateInput}
                            type="text"
                            placeholder="Name"
                            required
                            
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email ID</label>
                            <input 
                            className="form-control" 
                            value={user.email}
                            name={'email'}
                            onChange={updateInput}
                            type="email"
                            placeholder="Email"
                            required
                            
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Roles</label>
                            <select className="form-select" 
                                value={user.roles}
                                name={'roles'}
                                onChange={updateSelect}
                                required
                                onSelect={ 
                                    user.roles.includes(user.roles)}
                            >
                                <option value="">Select</option>
                                {Roles.map((option, index) => (
                                    <option value={option}>{option}</option>
                                ))} 
                                
                            </select>
                            <p>Selected Roles: {JSON.stringify(user.roles)}</p>
                        </div>
                        
                        <button type="button" onClick={handleSubmit} className="btn btn-primary mt-5 ms-5">Submit</button>
                        <button type="button" onClick={handleReset} className="btn btn-primary mt-5 ms-5">Reset</button>
                    </div>
                </div>
            </div>
           
        </>
    );

}

export default Insert;