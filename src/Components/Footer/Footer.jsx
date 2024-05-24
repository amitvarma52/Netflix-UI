import React from 'react'
import { FaInstagram,FaYoutube,FaFacebook,FaTwitter } from "react-icons/fa";
import style from './Footer.module.css'
const Footer = () => {
  const Items=['FAQ','Help Center','Account','Media Centre','Investor Relations','Jobs','Ways to Watch','Terms of Use','Privacy','Cookie Preferences','Corporate Information','Contact US','Speed Test','Legal Notices','Only on Netflix']
  return (
    <>
      <footer>
        <div className={style.container}>
          <ul>
            <li><FaInstagram color='purple'/></li>
            <li><FaYoutube color='red'/></li>
            <li><FaTwitter color='skyBlue'/></li>
            <li><FaFacebook color='blue'/></li>
          </ul>
          <div className={style.grid}>
            {Items.map(element=><a key={element}>{element}</a>)}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
