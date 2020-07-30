import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button' // usando styled component


function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo da CodeFlix"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
        </Button> 
      </nav>
  );
}
export default Menu