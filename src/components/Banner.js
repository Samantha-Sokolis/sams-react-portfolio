//importing react hooks from library - hook 
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/homepage-hero.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { Component }  from 'react';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer", "Illustrator" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container> {/* Bootsrap containter starts */} 
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <img src={headerImg} alt="Header Img"/>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <h1>Hi, I'm Sam...</h1>
            <h2>...and this is Sunny. Welcome to my portfolio.</h2>
            <p>A bit about me. I have studied Art, Design, Creative Writing, which led to careers in art, design, marketing and teaching. My latest adventure is within the world of coding, and this is me at the beginning of my development career. See my projects, resume and contact details below.</p>
            </Col> 
        </Row>
      </Container>
    </section>
  )
}
