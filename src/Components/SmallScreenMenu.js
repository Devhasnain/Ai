import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {HiMenu} from 'react-icons/hi'
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function SmallScreenMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <HiMenu size={40} onClick={handleShow} style={{cursor:"pointer"}}/>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="border-bottom" closeButton>
          <Offcanvas.Title><Logo/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav d-block">
            <li className="nav-item p-2 fw-bold border-bottom"><NavLink className='nav-link text-dark text-decoration-none' to='/' onClick={handleClose}>Home</NavLink></li>
            <li className="nav-item p-2 fw-bold border-bottom"><NavLink className='nav-link text-dark text-decoration-none' to='/pricing' onClick={handleClose}>Pricing</NavLink></li>
            <li className="nav-item p-2 fw-bold border-bottom"><NavLink className='nav-link text-dark text-decoration-none' to='/contact' onClick={handleClose}>About Us</NavLink></li>
            <li className="nav-item p-2 fw-bold border-bottom"><NavLink className='nav-link text-dark text-decoration-none' to='/contact' onClick={handleClose}>Contact Us</NavLink></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SmallScreenMenu ;
