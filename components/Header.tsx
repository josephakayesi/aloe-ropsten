import React from 'react'
import { Logo } from './Logo'
import Web3 from './Web3'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white ">
            <div className="container-fluid px-0 ">
                <a className="navbar-brand" href="#navbrand">
                    <Logo />
                </a>
                <ul className="navbar-nav navbar-left mr-auto">
                    <li className="nav-item active"></li>
                </ul>
                <div className="navbar-right navbar">
                    <Web3 />
                </div>
            </div>
        </nav>
    )
}

export default Header
