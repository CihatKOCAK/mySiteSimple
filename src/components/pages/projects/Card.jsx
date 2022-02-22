import React from 'react';
import "./card.scss";


export default function Card(props) {

    return (
        <div className="card">
            <a href={props.href} target="blank"><i className={props.ico}></i></a>
            <h2>{props.title}</h2>
            <div className="line" style={{ backgroundColor: props.bgc }}></div>
            <p>{props.content}</p>
            <a className='gotoproject' href={props.href}>go to project...</a>
           
        </div>
    );
}

