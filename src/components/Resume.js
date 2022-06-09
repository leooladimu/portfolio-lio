import React from 'react';
import Container from 'react-bootstrap/Container';
import reactLogo from './images/React.png';
import nodeLogo from "./images/NodeJS.png";
import cssLogo from "./images/CSS.png";
import htmlLogo from './images/HTML.png';
import jsLogo from './images/Javascript.png';
import sqlLogo from './images/SQL.png';
import gitLogo from './images/Git.png';

const Resume = () => {
  const styles = {
    main: {
      background: '#B5873C',
      margin: '10px auto',
      width: '90%',
      maxWidth: '800px',
      padding: '15px'
    },
    collection: {
      marginBottom: '30px'
    },
    logos: {
      height: '90px',
      margin: '10px 0'
    }
  }

  return (
    <div>
      <div style={styles.main}>
        <h3>Education</h3>
        <div style={styles.collection}>
          <h4>BloomTech</h4>
          <p>Completed June 2022</p>
          <p>Best coding bootcamp in the world</p>
        </div>
        <div style={styles.collection}>
          <h4>Technical Projects</h4>
          <p>African Marketplace, Front End Developer</p>
          <p>BW Fitness, Front End Developer</p>
          <p>Anywhere Fitness, Full Stack Developer</p>
        </div>
        <h3>Tech Experience</h3>
        <div style={styles.collection}>
          <h4>Bloom Institute of Technology (formerly the Lambda School)	July 2021 to Present</h4>
          <li>Build Week projects required me to listen to and support my team members with problem identification, root cause analysis and decision-making.</li>
          <li>I helped design, develop and maintain core system features on full-stack web applications, based on specifications provided by our client (in this case, our school).</li>
          <li>Collaborated with teammates to develop fully functional app according to specifications.</li>
          <li>Solved user inquiries that arose during day-to-day operation of the app. </li>
        </div>
        <h3>Skills</h3>
        <Container style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          <img src={reactLogo} alt='' style={styles.logos}></img>
          <img src={nodeLogo} alt='' style={styles.logos}></img>
          <img src={cssLogo} alt='' style={styles.logos}></img>
          <img src={gitLogo} alt='' style={styles.logos}></img>
          <img src={htmlLogo} alt='' style={styles.logos}></img>
          <img src={sqlLogo } alt='' style={styles.logos}></img>
          <img src={jsLogo} alt='' style={styles.logos}></img>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
