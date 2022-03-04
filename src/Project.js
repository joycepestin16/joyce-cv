import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';

function Project() {
    return (
        <div className="project component-space" id="Projects">
            <div className="heading">
                <h1 className="heading">Projects Handled</h1>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-3">
                        <div className="project-box pointer relative">
                            <div className="project-box-img pointer relative">
                                <div className="project-img-box">
                                    <img src={Project1} alt="" className="project-img" />
                                </div>
                                <div className="mask-effect"></div>
                            </div>
                            <div className="project-meta absolute">
                                <div className="project-wrapper">
                                    <h4 className="project-text">FurCare: A Mobile Application To
                                        Provide Care and Animal Custody
                                        Towards Stray Dogs and Cats.</h4>
                                </div>
                               {/*  <a href="#" className="project-btn">View Details</a> */}
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="project-box pointer relative">
                            <div className="project-box-img pointer relative">
                                <div className="project-img-box">
                                    <img src={Project2} alt="" className="project-img" />
                                </div>
                                <div className="mask-effect"></div>
                            </div>
                            <div className="project-meta absolute">
                                <div className="project-wrapper">

                                    <h4 className="project-text">FOODVERSE: An Informative
                                        Application for Food Enthusiasts</h4>

                                </div>

                               {/*  <a href="#" className="project-btn">View Details</a> */}
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="project-box pointer relative">
                            <div className="project-box-img pointer relative">
                                <div className="project-img-box">
                                    <img src={Project3} alt="" className="project-img" />
                                </div>
                                <div className="mask-effect"></div>
                            </div>
                            <div className="project-meta absolute">
                                <div className="project-wrapper">
                                    <h4 className="project-text">BeST Escolario: An Online Publication
                                        System for Becarios de Santo Tomas</h4>
                                </div>

                                {/* <a href="#" className="project-btn">View Details</a> */}
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export default Project;