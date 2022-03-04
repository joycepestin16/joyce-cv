import React from 'react'
import './Education.css'

function Education() {
    return (
        <div className='education component-space' id='Education'>
            <div className='heading'>
                <div className='education-meta'>
                    <h1 className='heading'>Education</h1>
                </div>
            </div>
            <div className='row'>
                <div className="column">
                    <div className="card">
                        <h2 className='education-heading'>
                            University of Santo Tomas
                        </h2>
                        <h6 className='education-year'>S.Y 2018-2022</h6>
                        <p className='education-text'>Bachelor of Science in Information Technology</p>
                        <p className='education-text'>College of Information and Computing Sciences</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h2 className='education-heading'>
                            University of Santo Tomas Senior High School
                        </h2>
                        <h6 className='education-year'>S.Y 2016-2018</h6>
                        <p className='education-text'>Music, Arts and Design Track</p>
                        <p className='education-text'>UST Senior High School Department</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h2 className='education-heading'>
                            Ramon Magsaysay High School Manila
                        </h2>
                        <h6 className='education-year'>S.Y 2012-2016</h6>
                        <p className='education-text'>Junior High School</p>
                        <p className='education-text'>High School Department</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Education