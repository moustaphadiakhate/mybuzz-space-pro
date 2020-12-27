import React from 'react';
import {NavLink} from 'react-router-dom';

const LienConnecter = () => {
    return (
        <ul className="right">
            <li><NavLink to="./Mesbuzzs">Mes Buzzs</NavLink></li>
            <li><NavLink to="./Buzz">Editer Buzz</NavLink></li>
            <li><NavLink to='./SeDeconnecter'>SeDeconnecter</NavLink></li>
        </ul>
    )
}

export default LienConnecter