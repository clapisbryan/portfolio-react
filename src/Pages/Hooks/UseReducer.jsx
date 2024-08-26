import React, { useReducer } from 'react'
import { motion } from "framer-motion";
import AppNavbar from '../../components/AppNavbar/AppNavbar';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <>

            <AppNavbar />
            <div id="landing" className="container">
                <motion.h1
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="fw-bold sub-text-primary title mt-5 text-center"
                >
                    Use Reducer
                </motion.h1>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1>{state.count}</h1>
                    <button className='btn btn-primary btn-lg' onClick={() => {
                        dispatch({ type: "INCREMENT" })
                        dispatch({ type: "toggleShowText" })
                    }}>Click Here</button>
                    {state.showText && <p>This is a text</p>}
                </div>
            </div>
        </>
    )
}

export default UseReducer
