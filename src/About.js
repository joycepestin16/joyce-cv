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

                            <p className='about-text p-color'>
                                A 4th-year student that aims to be a part of a dynamic and
                                forward-thinking organization that will allow me to put my
                                skills and qualifications in the field of information
                                technology. I desire to work in a dynamic professional
                                environment with a growing organization and utilize my
                                creativity and innovative thinking for benefit of the organization and myself.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;