import React from 'react';
import aboutme from '../images/aboutme.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const About = (props) => {
      return <Container className="mt-5">
            <Row>
                  <Col className="col-5">
                     <p>
                        <img src={aboutme} className="img-fluid" alt="" />
                     </p>
                  </Col >
                  <Col  className="col-7">
                        <p></p> Hi, my name is Katya Preobrazhenski, I'm an artist working with acrilic paints.
                        <p></p>
                        Once, I looked at my favourite artworks, I did just for joy, and realised that most of them are images of cutie animals and birds. So, drop the facade, drawing pets is my true passion and pure pleasure. We all know that the best creations are combination of skills and love for the process. 
                        <p></p>
                        Also, with my artist experience, I knew, that lots of pet lovers, who want eather a perfect present or a gift for themselves as a portret of bellowed animal, usually confuse with the order process : not knowing in advance exhact price, time or artist style.
                        <p></p>
                        So this is where Fluffy concept began: my passion and skills of drawing pets and friendly order process.
                        <p></p>
                        Me and my geek boyfriend created super simple order template: download your favourite pet photo, choose one of the suggested artistic styles, pick main colors scheme and pet accessories (if you wish), choose size of canvas and voila! After on-line payment your treasure will be yours within exhact time!
                        <p></p>
                        Simple and full of joy! 
                        <p></p>
                        Just like a love with your pet friend) 
                  </Col>
            </Row>
      </Container>
}

export default About;