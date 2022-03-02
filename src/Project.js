import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';

function Project() {
    return (
        <div className="project component-space" id="Portfolio">
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
                                <h5 className="project-text">FurCare: 2020</h5>
                                <h4 className="project-text">LOREMM IPSUM</h4>
                                <a href="#" className="project-btn">View Details</a>
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
                                <h5 className="project-text">Foodverse</h5>
                                <h4 className="project-text">Getting tickets to the big show</h4>
                                <a href="#" className="project-btn">View Details</a>
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
                                <h5 className="project-text">Development</h5>
                                <h4 className="project-text">Getting tickets to the big show</h4>
                                <a href="#" className="project-btn">View Details</a>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export default Project;