import React from 'react'
import './header.css'
import CV from '../../assets/anita-cv.pdf'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="header__content">
        <h5>Hi there, <span>I'm Anita Ikediashi</span></h5>
        <p>A Frontend Developer with interest to work with a team to improve my professional skills, and expertise in an organization which provide challenges.</p>
        <div className="cta">
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Hire Me</a>
        </div>
      </div>

      <div className="header__me">
        <div className="header__me-image">
          <img src={ME} alt="anita ikediashi" />
        </div>
      </div>
    </header>
  )
}

export default Header