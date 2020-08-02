import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button' // usando styled component


function Menu(){
  return(
    <nav className="Menu">
      <Link to ="/">
        <img className="Logo" src={Logo} alt="Logo da CodeFlix"/>
      </Link>

      <Button as={Link} className="ButtonLink" to ="/cadastro/video">
        Novo Video
      </Button> 
      </nav>
  );
}
export default Menu