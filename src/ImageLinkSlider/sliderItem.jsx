import React from 'react';
import {Link} from 'react-router-dom'

export default function SliderItem(props) {

    return (
        <>
            <Link className="Nav-Image-Link" to={props.route} draggable = "false">
                <img className="Nav-Image" src = {props.src} draggable = "false">
                </img>
                <label className="Nav-Image-Label">
                        {props.name}
                </label>
            </Link>
        </>
    )
}