import React from 'react';
import {NavLink} from 'react-router-dom';
import LienConnecter from './LienConnecter';
import LienDeconnecter from './LienDeconnecter';

const Navbar = ({props}) => {
    return(

 <nav  className="nav-wrapper grey darken-3">
     <div className="container">
        <NavLink to="./" class="brand-logo">Dashboard</NavLink>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
             <LienConnecter/>
             <LienDeconnecter/>
         </ul>
     </div>
 </nav>
    )
}

export default Navbar