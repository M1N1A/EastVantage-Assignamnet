import React, { useEffect, useState } from "react";
import Navabar from "../Layouts/Navabar";
import UserService from "../Services/UserService";


interface IProps{}
interface IState{}

let View:React.FC<IProps> =() =>{
   
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        UserService.getAllUsers().then((response)=>{
            setUsers(response.data)
        });
    },[])
    
    return(
        <>
          <Navabar/>  
          <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <center><h3>List of Users</h3></center>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roles</th>
                        </thead>
                        <tbody>
                                {
                                users.length > 0 &&
                                users.map((user:any) => (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.roles}</td>
                                    </tr>
                                ))
                                } 
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
           
        </>
    );

}

export default View;