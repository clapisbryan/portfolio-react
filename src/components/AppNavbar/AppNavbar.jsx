import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from "framer-motion";

const AppNavbar = () => {
    return (
        <>
            <Container className='px-lg-0 position-fixed w-100 start-0 end-0 top-0'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent bg-transparent">
                    <div className="container-fluid px-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1 }}
                        >
                            <a className="navbar-brand logo link fw-bold" href="/">Bryan Portfolio.</a>
                        </motion.div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-end align-items-center collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                    className='nav-item'
                                >
                                    <a className="nav-link text-light link active" aria-current="page" href="/">Home</a>

                                </motion.li>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.1 }}
                                    className='nav-item'
                                >
                                    <a className="nav-link text-light link" href="#about">About</a>
                                </motion.li>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.2 }}
                                    className='nav-item'
                                >
                                    <a className="nav-link text-light link" href="#projects">Projects</a>
                                </motion.li>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.3 }}
                                    className='nav-item'
                                >
                                    <a className="nav-link text-light link" href="#tools">Tools</a>
                                </motion.li>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.4 }}
                                    className='nav-item'
                                >
                                    <a className="nav-link text-light link" href="#contact">Contacts</a>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Container>
        </>
    )
}

export default AppNavbar
