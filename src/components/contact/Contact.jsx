import React from 'react'
import './contact.css'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s8rmrjn', 'template_c3j3qid', form.current, '-yTj3ks-EKhAh1KSV')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <div className="heading">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contact__container">
        <div className="contact__info">
          <article className='article__box'>
            <GoLocation className='icon'/>
            <address>Oyadiran Estate Sabo-Yaba,<br />Lagos, Nigeria.</address>
          </article>
          <article className='article__box'>
            <AiOutlineMessage className='icon'/>
            <p>anitaikediashi83@gmail.com</p>
            <a href="mailto:anitaikediashi@gmail.com">Send a message</a>
          </article>
          <article className='article__box'>
            <AiOutlinePhone className='icon'/>
            <p>08100406393</p>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form__input">
            <label>Name</label>
            <input type="text" name='name' placeholder='Your Name'/>
          </div>
          <div className="form__input">
            <label>Email</label>
            <input type="email" name="email" placeholder='Your Email'/>
          </div>
          <div className="form__input">
            <label>Message</label>
            <textarea name="message" placeholder='Your Message'></textarea>
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>
          </form>
      </div>
    </section>
  )
}

export default Contact