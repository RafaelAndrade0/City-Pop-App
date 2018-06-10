import React from 'react';
import logo from '../images/logo.gif';

const CardInfo = (props) => (
    <div>
        <img src={logo} alt="img-driving"/>
        <p><strong>Tocando agora: </strong></p>
        <p>{props.info.name}</p>
    </div>
);

export default CardInfo;