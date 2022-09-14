import React from 'react';
import c from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div data-testid="aboutus" className={c.wrapper}>
      <div className={c.text}>
        I am a web developer with experience building web applications.
        I have experience in creating a SPA application using React.
        (participated in the development team in the startup competition from ISsoft.)
        I constantly improve my technical skills. (I took a preparatory and basic course at RS School,
        now I'm taking a course on React) I have experience working in a team. In free time doing my Pet projects,
        reading books and working on improving my English. Open for your suggestions!
      </div>
    </div>
  );
};

export default AboutUs;
