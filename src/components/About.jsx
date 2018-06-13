import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../styles/about.css';

const About = () => (
    <div className="aboutStyle">
        <Typography Typography variant="display1" gutterBottom>
            What is City pop?
        </Typography>

        <p>
            {`In the early 1980s, with the spread of car stereos,
             the term City Pop came to describe a type of popular music... 
             a breezy, mellow mixture of smooth jazz and album-oriented rock – 
             often with elements of jazz fusion, jazz-funk, or boogie – which appealed to an older 
             and more affluent Japanese audience. Essentially a "mood" or "lifestyle" genre, its 
            reflected a life of luxury in a sophisticated urban environment.`}
        </p>
    </div>
);

export default About;