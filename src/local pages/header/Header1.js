//import { useState } from "react";
import './Header1.css';
//import logo from '../images/logo.svg'


function Header() {
    return (
        <div className="header">
            <div className="row">
                <a href="/aboutUs" className="col">
                    About Us
                </a>
                <a href="/contacts" className="col">
                    Contacts
                </a>
                <a href="/cases" className="col">
                    Cases
                </a>
            </div>
        </div>
    );
};

export default Header;
