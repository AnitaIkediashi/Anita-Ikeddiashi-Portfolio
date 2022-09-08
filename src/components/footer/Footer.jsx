import React from 'react'
import './footer.css'
import {FiLinkedin} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {RiGithubLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <p>Anita Ikediashi</p>
      <div className="links">
      <a href="https://www.linkedin.com/in/anita-ikediashi-a61668188" target='_blank'><FiLinkedin/></a>
      <a href="https://twitter.com/Anita_ikediashi" target='_blank'><FiTwitter/></a>
      <a href="https://github.com/AnitaIkediashi" target='_blank'><RiGithubLine/></a>
      </div>
      <small>Copyright &copy; 2022 all rights reserved</small>
    </footer>
  )
}

export default Footer