import React from 'react'
import { FaSearch ,FaBell} from "react-icons/fa";
import style from './Nav.module.css'
import netflix from './netflixlogo.png'
const Nav = () => {
  return (
    <>
     <div className={style.navbar} >
      <ul>
        <li><img src={netflix} alt='netflix'/></li>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>Mylist</li>
        <li>Browse by Language</li>
      </ul>
      <ul>
        <li><FaSearch/></li>
        <li><FaBell color='red'/></li>
      </ul>
     </div>
    </>
  )
}

export default Nav
