import React from 'react';
import Image from 'react-bootstrap/Image';
import me from './images/Leo3.png';

const Home = () => {

    const styles = {
        home: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        salutation: {
            background: '#B5873C',
            borderRadius: '5px',
            fontSize: '20px',
            padding: '20px',
            marginRight: '50px',
            color: 'white',
            width: '40vw',
            maxWidth: '500px'
        },
        image: {
            padding: '5% 10%',
            width: '50vw',
            margin: '0 auto',
            maxWidth: '700px'
        }
    }

    return (
        <div style={styles.home}>
            <Image src={me} style={styles.image} />
            <p style={styles.salutation}>Unlike a lot else in life, with software development I believe there is always a solution. I love solving these problems and am always exited to tackle new ones. </p>
        </div>
    );
};

export default Home;

