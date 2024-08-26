import React, { useRef } from 'react'
import { motion } from "framer-motion";
import AppNavbar from '../../components/AppNavbar/AppNavbar';

const UseRef = () => {
    const inputRef = useRef(null);

    const handleOnClick = () => {
        if(inputRef.current.value == ""){
            inputRef.current.focus();
        } else {
            console.log(inputRef.current.value);
            inputRef.current.value = "";
        }
    }
    return (
        <div>
            <AppNavbar />
            <div id="landing" className="container">
                <motion.h1
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="fw-bold sub-text-primary title mt-5 text-center"
                >
                    Use Ref
                </motion.h1>
                <div>
                    <input type="text" className='form-control mb-3' ref={inputRef}/>
                    <button className="btn btn-primary" onClick={handleOnClick}>Change Name</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
