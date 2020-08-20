import React from 'react';
import {Link} from 'react-router-dom'

export default function SliderItem(props) {

    const noLabel = props.name === "" ? true : false;

    return (
        <>
            <Link className="Nav-Image-Link" to={props.route} style={props.style} draggable = "false">
                <img className="Nav-Image" src = {props.src} draggable = "false">
                </img>
                {noLabel ? null : <label className="Nav-Image-Label"> {props.name} </label> }
            </Link>
        </>
    )
}