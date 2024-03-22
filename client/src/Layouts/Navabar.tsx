import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
interface IProps{}
interface IState{}

let Navabar:React.FC<IProps> =() =>{
    // const dispatch: AppDispatch = useDispatch();
    const clickLogOut = () => {
        //  dispatch(logoutAction({}));
        //  dispatch(profileLogoutAction({}));
        //  ToastUtil.displaySuccessToast('Logout is Success!');
     };
    return(
        <>
            <section className="ftco-section">
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light navbarOverride" id="ftco-navbar">
                    <div className="container">
                
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span> Menu
                        </button>
                        <form className="searchform order-lg-last">
                            <div className="form-group d-flex">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to={'/'} className="nav-link text-decoration-none text-light">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/insert'} className="nav-link text-decoration-none text-light">Insert</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/view'} className="nav-link text-decoration-none text-light">View</Link>
                                    </li>
                                </ul>
                            </div>
                        </form>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <Link to={'/'} className="nav-link text-decoration-none text-light">EastVantage PHP/React Assignamnet</Link>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );

}

export default Navabar;