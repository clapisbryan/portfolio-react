import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <Container>
            <section id="about" className="container py-5">
                <h2 className="text-center text-light mb-4">About</h2>
                <ul className="text-start p-0">
                    <li>
                        <p>
                            <span className="sub-text-primary fw-bold">● Front End Web Development: </span>
                            I specialize in Front End Web Development, using HTML5, CSS3, Bootstrap, and wireframes to create responsive designs, and manage version control with Git and GitHub while deploying projects on Vercel.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className="sub-text-primary fw-bold">● Back End Development: </span>
                            My Back End Development expertise includes building scalable applications with JavaScript, Node.js, and Express.js, managing databases with MongoDB, testing APIs with Postman, and designing RESTful services.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className="sub-text-primary fw-bold">● Full Stack Development: </span>
                            In Full Stack Development, I leverage React.js for dynamic user interfaces, utilize JS DOM manipulation for interactive elements, integrate APIs with Fetch, follow the SDLC for structured development, and manage projects using Trello
                        </p>
                    </li>
                </ul>
            </section>
        </Container>
    )
}

export default AboutMe
