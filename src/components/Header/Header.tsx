import React from 'react'

import Logo from '../../assets/img/logo.png'

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="Logo" className="header__logo"/>
            <div className="header__title">Github users seach app</div>
        </header>
    )
}

export default Header