import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {

  const styles = {
    form: {
      width: '80%',
      maxWidth: '700px',
      margin: '10vh auto',
      height: '10vh auto',
    },   
  }

  return (
    <div>
      <h1 style={{color: '#D8A113', padding: '30px'}}>Contact</h1>
      <Form className='contactForm' style={styles.form}  acceptCharset="utf-8" action="https://formspree.io/f/mjvlprez" method="POST">
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" name="name" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" name="_replyto" placeholder="Email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Control as="textarea" name="message" rows={3} placeholder="Message" required/>
        </Form.Group>
        <Form.Control type="hidden" name="_subject" id="email-subject" value="Portfolio Contact Form"/>
        <Button variant="light" type="submit">Send</Button>
      </Form>
    </div>
  );
};

export default ContactForm;