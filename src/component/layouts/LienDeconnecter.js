import React from 'react';
import {NavLink} from 'react-router-dom';

const LienDeconnecter = () => {
    return (
        <ul className="right">
            <li><NavLink to='./SeConnecter'>Se Connecter</NavLink></li>
            <li><NavLink to='./SeInscrire'>S'Inscrire</NavLink></li>
        </ul>
    )
}

export default LienDeconnecter