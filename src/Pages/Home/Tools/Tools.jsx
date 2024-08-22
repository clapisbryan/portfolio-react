import React from 'react'

import GitImg from '../../../assets/images/tools/github.png';
import HtmlImg from '../../../assets/images/tools/html.png';
import CssImg from '../../../assets/images/tools/css3.png';
import BootStrapImg from '../../../assets/images/tools/bootstrap.png';
import ReacJsImg from '../../../assets/images/tools/reactjs.png';
import JavascriptImg from '../../../assets/images/tools/javascript.png';
import NodeJsImg from '../../../assets/images/tools/nodejs.png';

const Tools = () => {
    return (
        <>
            <section id="tools" className="container py-5">
                <div>
                    <h2 className="text-center text-light mb-4">Tools</h2>
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <img
                                    src={GitImg}
                                    alt=""
                                    srcSet=""
                                    className="img-fluid project-img"
                                />
                                <p>GIT</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <img
                                    src={HtmlImg}
                                    alt=""
                                    srcSet=""
                                    className="img-fluid project-img"
                                />
                                <p>HTML</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <img
                                    src={CssImg}
                                    alt=""
                                    srcSet=""
                                    className="img-fluid project-img"
                                />
                                <p>CSS3</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <img
                                    src={BootStrapImg}
                                    alt=""
                                    srcSet=""
                                    className="img-fluid project-img"
                                />
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <img
                                    src={JavascriptImg}
                                    alt=""
                                    srcSet=""
                                    className="img-fluid project-img"
                                />
                                <p>Javascript</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <img
                                    src={ReacJsImg}
                                    alt=""
                                    srcSet=""
                                    className="img-fluid project-img"
                                />
                                <p>React.JS</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <img
                                    src={NodeJsImg}
                                    alt=""
                                    srcSet=""
                                    className="img-fluid project-img"
                                />
                                <p>NodeJS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tools
