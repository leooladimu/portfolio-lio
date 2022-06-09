import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import potluck from './images/potluck.jpeg';
import africanMarket from './images/africanMarket.png';
import anywhereFitness from './images/anywhereFitness.png';

const Projects = () => {

  const projList = [
    {
      id: 88,
      title: 'Potluck Planner',
      text: "If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential.",
      repoLocation: 'https://github.com/potluck-planner-8',
      liveLocation: 'https://potluckplanner8.vercel.app/',
      imageLocation: potluck
    },
    {
      id: 99,
      title: 'African Marketplace',
      text: 'Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.',
      repoLocation: 'https://github.com/Build-Week-AfriMark',
      liveLocation: 'https://stoic-ride-894849.netlify.app/',
      imageLocation: africanMarket
    },
    {
      id: 77,
      title: 'Anywhere Fitness',
      text: 'These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. ',
      repoLocation: 'https://github.com/BW-Fit-Anywhere',
      liveLocation: 'http://bw-fit-anywhere-front-end.vercel.app/',
      imageLocation: anywhereFitness
    }
  ]

  const styles = {
    content: {
      background: '#B5873C',
      color: '#D8A113'
    },
    card: {
      width: '80vw',
      maxWidth: '700px',
      margin: '20px auto',
      boxShadow: '5px 5px 5px #4a4538',
      border: '3px solid #B5873C'
    },
    item: {
      width: '100%',
      margin: '0 auto'
    },
    button: {
      margin: '0 20px',
      background: '#D8A113',
      border: 'none',
      boxShadow: '5px 5px 5px black',
    }
  }

  return (
    <div>
      <h1 style={{color: '#D8A113', padding: '25px'}}>Projects</h1>
      { projList.map(proj =>(
        <Card style={styles.card} key={proj.id}>
          <Card.Img style={styles.item} variant='top' src={proj.imageLocation} alt="Card image" />
          <Card.Body style={styles.content}>
            <Card.Title>{proj.title}</Card.Title>
            <Card.Text>
              {proj.text}
            </Card.Text>
            <Button href={proj.repoLocation} variant="light" style={styles.button}>Repo</Button>
            <Button href={proj.liveLocation} variant="light" style={styles.button}>Project</Button>
            </Card.Body>
        </Card>            
      ))}
    </div>
  );
};

export default Projects;
