import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { Component }  from 'react';

export const Portfolio = () => {

  const projects = [
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio</h2>
                <p>These projects demonstrate experience and skills in the following areas: React.js, progressive web applications, MERN, NoSql, MySql, MVC framework, ORM, Express.js, CSS, JavaScript and HTML and Git. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
