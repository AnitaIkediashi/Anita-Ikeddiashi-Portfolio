import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import  {useState} from 'react'

const About = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section id="about">
      <div className="heading">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__tabs">
          <div className="about__tabs-spans">
            <span className={toggleState === 1 ? 'btn active__tab' : 'btn'} onClick={() => toggleTab(1)}>Education</span>
            <span className={toggleState === 2 ? 'btn active__tab' : 'btn'} onClick={() => toggleTab(2)}>Experience</span>
            <span className={toggleState === 3 ? 'btn active__tab' : 'btn'} onClick={() => toggleTab(3)}>Skills</span>
          </div>
          <div className="about__tabs-contents">
            <article className={toggleState === 1 ? 'article active' : 'article'}>
              <div className="content">
                <div className="para">
                  <h3>University of Benin</h3>
                  <p>Civil Engineering</p>
                  <small>Second Upper Division</small>
                </div>
                <div className="year">
                  2015-2019
                </div>
              </div>
            </article>

            <article className={toggleState === 2 ? 'article active' : 'article'}>
              <div className="content">
                <div className="content__one">
                  <h3>Freelance</h3>
                  <div className="year">Mar 2022 - Present</div>
                  <p>Frontend Developer</p>
                  <ul className='lists'>
                    <li>Tasked with the improvement of the UI/UX of applications.</li>
                    <li>Developed knowledge on how to use HTML, CSS and JavaScript to bring concepts to life.</li>
                    <li>Ensured that the web design is smartphone-capable.</li>
                  </ul>
                  <br />
                  <h3>Union Model Secondary School</h3>
                  <div className="year">Jan 2020 - Feb 2021</div>
                  <p>Teacher</p>
                  <ul className='lists'>
                    <li>Engaged the students and improving their learning such as treating each student as an individual, by being empathetic and understanding to what may be going on in their lives.</li>
                    <li>Worked in a constantly evolving environment by adjusting my teaching methods based on the age of my students, the resources available and changing curriculum, practices and requirements.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className={toggleState === 3 ? 'article active' : 'article'}>
              <div className="content">
                <div className="content__one">
                  <ul className='lists'>
                    <li>Proficient in coding languages such as HTML, CSS, JavaScript, Tailwind CSS, Bootstrap 5, SASS and React.</li>
                    <li>Decision Making.</li>
                    <li>Creative thinking.</li>
                    <li>Oral and written communication.</li>
                    <li>Quick learning.</li>
                    <li>Teamwork.</li>
                    <li>Adaptability.</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About