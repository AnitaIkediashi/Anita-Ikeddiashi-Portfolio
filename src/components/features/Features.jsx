import React from 'react'
import './features.css'
import ME1 from '../../assets/image1.png'
import ME2 from '../../assets/image2.png'
import ME3 from '../../assets/image3.png'
import ME4 from '../../assets/image4.png'
import ME5 from '../../assets/image5.png'
import ME6 from '../../assets/image6.png'


const data = [
  {
    id: 1,
    image: ME1,
    para: "A gym website built with React js and react router dom library package",
    repo: "https://github.com/AnitaIkediashi/Gym-website.git",
    link: "https://gym-website-dusky.vercel.app/",
  },
  {
    id: 2,
    image: ME2,
    para: "Beatz E-commerce website project using Vanilla HTML, CSS and JavaScript.",
    repo: "https://github.com/AnitaIkediashi/Beatz-E-commerce-Project.git",
    link: "https://anitaikediashi.github.io/Beatz-E-commerce-Project/index.html",
  },
  {
    id: 3,
    image: ME3,
    para: "A cryptocurrency website for news updates and market exchange integrated with coingecko API and axios for fetching its data. Added with registration and login validation from Localstorage for users, with React router for creating private routes for non users.",
    repo: "https://github.com/AnitaIkediashi/iCrypto.git",
    link: "https://icrypto.vercel.app/",
  },
  {
    id: 4,
    image: ME4,
    para: "A business website built with React js and react router dom",
    repo: "https://github.com/AnitaIkediashi/gcet-prototype.git",
    link: "https://gcet-prototype.vercel.app/",
  },
  {
    id: 5,
    image: ME5,
    para: "A food Ordering App designed using react js, redux and redux toolkit, firebase, stripe, framer motion and toastify.",
    repo: "https://github.com/AnitaIkediashi/AfriDishes-frontend.git",
    link: "https://afridishes-frontend.onrender.com/",
  },
  {
    id: 6,
    image: ME6,
    para: "A blog CRUD app built with react js, firebase, tailwindCSS, Framer motion, react toastify, and react router dom",
    repo: "https://github.com/AnitaIkediashi/blog-crud-app.git",
    link: "https://blog-crud-app.vercel.app/",
  },
];

const Features = () => {
  return (
    <section id="projects">
      <div className="heading">
        <h5>Recent Work</h5>
        <h2>Projects</h2>
      </div>
      <div className="project__container">
        {
          data.map(({id, image, para, repo, link}) => {
            return (
              <article className='project__box' key={id}>
                <div className="image">
                  <img src={image} alt={para} />
                </div>
                <p>{para}</p>
                <div className="cta">
                  <a href={repo} className='btn' target='_blank'>Repo</a>
                  <a href={link} className='btn btn-primary' target='_blank'>Link</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Features