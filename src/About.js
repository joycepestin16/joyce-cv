import React from 'react'
import './About.css';
import aboutImg from "./img/aboutme.png";

function About() {
    return (
        <div className='about component-space'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <img src={aboutImg} alt="" className='about-img' />
                    </div>

                    <div className='col-2'>
                        <h1 className='about-heading sweet'>About me</h1>
                        <div className='about-meta'>
                            <p className='about-text p-color'>
                                A 4th-year student that aims to be a part of a dynamic and
                                forward-thinking organization that will allow me to put my
                                skills and qualifications in the field of information
                                technology. I desire to work in a dynamic professional
                                environment with a growing organization and utilize my
                                creativity and innovative thinking for benefit of the organization and myself.
                            </p>

                        </div>

                        <div className='biodata'>
                            <div className="biodata-container d-flex">
                                <div className="age-heading">
                                    <h2 className="biodata-heading">Age:</h2>
                                </div>

                                <div className='age-text'>
                                    <p className="biodata-text">22 years old</p>
                                </div>

                                <div className="bday-heading">
                                    <h2 className="biodata-heading">Birthday:</h2>
                                </div>

                                <div className='bday-text'>
                                    <p className="biodata-text">01/16/2000</p>
                                </div>

                            </div>

                            <div className="biodata-container d-flex">
                                <div className="address-heading">
                                    <h2 className="biodata-heading">Address:</h2>
                                </div>

                                <div className='address-text'>
                                    <p className="biodata-text">B13 L26 KS15 Graian St. LNC, Gen. Trias Cavite</p>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;