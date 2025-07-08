import React from 'react'
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <>
            <div id="landing" className="container">
                <div className="d-flex flex-column text-start h-100 align-items-start justify-content-center">

                    <motion.h6
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Hi, My name is
                    </motion.h6>

                    <motion.h2
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="fw-bold mb-0"
                    >
                        Bryan B. Clapis
                    </motion.h2>

                    <motion.h1
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="fw-bold sub-text-primary title"
                    >
                        Web Developer
                    </motion.h1>

                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-secondary fs-6 banner-p"
                    >
                        I have two years of experience as a Web Developer specializing in React.js, complemented by two months of Back-End experience; I excel at creating user-friendly and responsive web applications leveraging my skills in React.
                    </motion.p>
                    <a href="#projects">
                        <motion.button
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className='btn btn-outline-primary fw-bold'
                        >

                            Check out my project
                        </motion.button>
                    </a>
                </div>
            </div >
        </>
    )
}

export default Banner
