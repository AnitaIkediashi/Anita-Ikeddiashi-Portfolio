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
    para: 'A restaurant food ordering website designed using pure HTML, CSS, JavaScript and swiper js.',
    repo: 'https://github.com/AnitaIkediashi/Dominos-Food-Restaurant-Landing-Page.git',
    link: 'https://anitaikediashi.github.io/Dominos-Food-Restaurant-Landing-Page/anitaproject/index.html'
  },
  {
    id: 2,
    image: ME2,
    para: 'Beatz E-commerce website project using Vanilla HTML, CSS and JavaScript.',
    repo: 'https://github.com/AnitaIkediashi/Beatz-E-commerce-Project.git',
    link: 'https://anitaikediashi.github.io/Beatz-E-commerce-Project/index.html'
  },
  {
    id: 3,
    image: ME3,
    para: 'A music blog website created and designed using vanilla HTML, CSS and JavaScript with swiper js.',
    repo: 'https://github.com/AnitaIkediashi/80s-jam-music-website.git',
    link: 'https://anitaikediashi.github.io/80s-jam-music-website/index.html'
  },
  {
    id: 4,
    image: ME4,
    para: 'A photography website design using vanilla html, css and JavaScript with Bootstrap 5 and lightbox js.',
    repo: 'https://github.com/AnitaIkediashi/J-and-J-Photography-Website.git',
    link: 'https://anitaikediashi.github.io/J-and-J-Photography-Website/home.html'
  },
  {
    id: 5,
    image: ME5,
    para: 'A remake of J and J Photography using html, tailwind css, JavaScript, swiper js and lightgallery js.',
    repo: 'https://github.com/AnitaIkediashi/Quest-Photography.git',
    link: 'https://anitaikediashi.github.io/Quest-Photography/src/index.html'
  },
  {
    id: 6,
    image: ME6,
    para: 'A tour agency website designed using sass with tilt js and aos.',
    repo: 'https://github.com/AnitaIkediashi/nigeria-tour-and-guide-website.git',
    link: 'https://anitaikediashi.github.io/nigeria-tour-and-guide-website/'
  }
]

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