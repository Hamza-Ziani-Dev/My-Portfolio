/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import ContactItem from '../components/ContactItem';
import Title from '../components/Title';

function Contact() {
  return (
    <div>
      <Title title="Contact Me" span="Contact Me" />
      <div className='ContactPage'>
        <div className='map-sect'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6651.717617578631!2d-7.676342726148668!3d33.531056366439266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62ceb921dfa21%3A0xc09ad54b19524368!2zUGhhcm1hY2llIE90aG1hbmUg2LXZitiv2YTZitipINi52KvZhdin2YY!5e0!3m2!1sfr!2sma!4v1648581556585!5m2!1sfr!2sma" width="600" height="450" loading="lazy"></iframe>
        </div>
        <div className='contact-sect'>
            <ContactItem icon={phone} text1={'+212 665054678'} text2={''} title={'Phone'}/>
            <ContactItem icon={email} text1={'hamzaziani.dev@gmail.com'}  title={'Email'} />
            <ContactItem icon={location} text1={''} text2={'casablanca, Morroco'} title={'Location'} />
        </div>
      </div>
    </div>
  )
}

export default Contact