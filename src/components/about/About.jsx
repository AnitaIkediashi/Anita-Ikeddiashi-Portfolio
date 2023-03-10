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
            <span
              className={toggleState === 1 ? "btn active__tab" : "btn"}
              onClick={() => toggleTab(1)}
            >
              Education
            </span>
            <span
              className={toggleState === 2 ? "btn active__tab" : "btn"}
              onClick={() => toggleTab(2)}
            >
              Experience
            </span>
            <span
              className={toggleState === 3 ? "btn active__tab" : "btn"}
              onClick={() => toggleTab(3)}
            >
              Skills
            </span>
          </div>
          <div className="about__tabs-contents">
            <article
              className={toggleState === 1 ? "article active" : "article"}
            >
              <div className="content">
                <div className="para">
                  <h3>University of Benin</h3>
                  <p>Civil Engineering</p>
                  <small>Second Upper Division</small>
                </div>
                <div className="year">2015-2019</div>
              </div>
            </article>

            <article
              className={toggleState === 2 ? "article active" : "article"}
            >
              <div className="content">
                <div className="content__one">
                  <h3>Huawei Technologies Nig , Co. LTD</h3>
                  <div className="year">January 3, 2023 - Present</div>
                  <p>Software Engineer</p>
                  <ul className="lists">
                    <li>
                      Developed and maintained software applications for
                      customer-facing applications.
                    </li>
                    <li>
                      Collaborated with other developers to ensure the
                      stability, security, and scalability of developed
                      applications.
                    </li>
                    <li>
                      Worked closely with customer support team to troubleshoot
                      and debug software.
                    </li>
                  </ul>
                  <br />
                  <h3>Freelance, Nigeria</h3>
                  <div className="year">December 2021 - Present</div>
                  <p>Frontend Developer</p>
                  <ul className="lists">
                    <li>
                      Developed knowledge on how to interact with RESTful APIs
                      on websites and web applications.
                    </li>
                    <li>
                      Integrated a web application with Registration and login
                      validation for users to get access to the website using
                      Localstorage, React JS and React router to create private
                      routes for non users.
                    </li>
                    <li>
                      Collaborated with a team of developers in building web
                      applications and websites using Redux and CSS modules.
                    </li>
                    <li>
                      Translated mock designs from figma into responsive mobile
                      and desktop webpages.
                    </li>
                  </ul>
                  <br />
                  <h3>Contract</h3>
                  <div className="year">February 2022 - October 2022</div>
                  <p>Frontend Developer</p>
                  <ul className="lists">
                    <li>
                      Designed and developed E-commerce web applications, using
                      JavaScript, React js, redux and redux toolkit for managing
                      its state for every components.
                    </li>
                    <li>
                      Developed knowledge on how to use firebase authentication
                      for registration, login and signout for users, and added
                      react router for privates routes for signin users to
                      access to all applications.
                    </li>
                    <li>
                      Implemented the means of payment for checkout sessions of
                      e-commerce products using Stripe.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article
              className={toggleState === 3 ? "article active" : "article"}
            >
              <div className="content">
                <div className="content__one">
                  <ul className="lists">
                    <li>HTML, CSS, SASS, Tailwind CSS</li>
                    <li>JavaScript, Typescript</li>
                    <li>React, Redux, React Native</li>
                    <li>VS code, Figma, NPM, Git</li>
                    <li>SQL, SaaS, SEO</li>
                    <li>UI/UX</li>
                    <li>Excellent analytical and multitasking skills</li>
                    <li>Quick Learning</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About