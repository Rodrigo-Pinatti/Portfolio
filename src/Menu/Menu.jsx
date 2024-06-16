import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import Linkedin from '../assets/linkedin1.png';
import Github from '../assets/github1.png';
import Gmail from '../assets/gmail1.png';

const Menu = () => {
    

    return (
        <header className={styles.header}>

            {/* Navegación principal - oculta en dispositivos móviles */}
            <nav className={styles.nav}>
                <a href="https://www.linkedin.com/in/rodrigo-pinatti/">
                    <img width={'25px'} src={Linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Rodrigo-Pinatti">
                    <img width={'25px'} src={Github} alt="GitHub" />
                </a>
                <a href="mailto:rodrigo.gomez.pinatti@gmail.com">
                    <img width={'29px'} src={Gmail} alt="Gmail" />
                </a>
            </nav>

            {/* Navegación principal visible en dispositivos grandes */}
            <nav className={styles.nav1}>
                <Link to='/'>INICIO</Link>
                <Link to='/proyectos'>PROYECTOS</Link>
                <Link to='/sobremi'>ESTUDIOS</Link>
            </nav>

            
            
           
        </header>
    );
}

export default Menu;
