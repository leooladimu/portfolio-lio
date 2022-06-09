import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import resume from './images/resume.pdf';

const Footer = () => {

  const styles = {
    footer: {
      display: 'flex',
      background: '#D8A113',
      border: 'none',
      height: '60px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    link: {
      color: 'green',
      fontWeight: 700,
      border: '2px solid green',
      margin: '3px auto'
    }
  }
  return (
    <Card.Footer>
    <div className="" style={styles.footer}>
      <Button style={styles.link} target="_blank" href='https://github.com/leooladimu' variant="outline-dark">GitHub</Button>
      <Button style={styles.link} target="_blank" href='https://www.linkedin.com/in/leo-oladimu/' variant="outline-dark">LinkedIn</Button>
      <Button style={styles.link} target="_blank" href={resume} variant="outline-dark">Resume</Button>
    </div>
    </Card.Footer>
  );
};

export default Footer;