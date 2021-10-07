import React from 'react'
import HomeIcon from '../Assets/home.png'
import {
    Link
  } from "react-router-dom";

export default function HomeButton() {
    return (
        <div className="home-button">
            <Link to='/'><img className="home-button-icon" src={HomeIcon} alt="" /></Link>
        </div>
    )
}
