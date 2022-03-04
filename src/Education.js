import React from 'react'
import './Education.css'
import bestLogo from './img/bestlogo.png'
import cnagLogo from './img/cnag.png'
import ustLogo from './img/ustlogo.png'
import rmhsLogo from './img/rmhs.png'

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
                    <img src={ustLogo} alt="ust" className='org-logo'/>
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
                    <img src={ustLogo} alt="ust" className='org-logo'/>
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
                    <img src={rmhsLogo} alt="rmhs" className='org-logo'/>
                        <h2 className='education-heading'>
                            Ramon Magsaysay High School Manila
                        </h2>
                        <h6 className='education-year'>S.Y 2012-2016</h6>
                        <p className='education-text'>Junior High School</p>
                        <p className='education-text'>High School Department</p>
                    </div>
                </div>

            </div>

            <div className='heading'>
                <div className='education-meta'>
                    <h1 className='heading-org'>Organization</h1>
                </div>
            </div>
            <div className='row'>
                <div className="column">
                    <div className="card-org">
                        <img src={bestLogo} alt="cnag" className='org-logo'/>
                        <h2 className='education-heading'>
                            Becarios de Santo Tomas
                        </h2>
                        <h6 className='education-year'>S.Y 2018-2019</h6>
                        <p className='education-text'>Executive Associate</p>
                        <p className='education-text'>Sole Thomasian Scholars Association of the University of Santo Tomas</p>
                    </div>
                </div>
                
                <div className="column">
                    <div className="card-org">
                    <img src={cnagLogo} alt="beca" className='org-logo'/>
                        <h2 className='education-heading'>
                            Cisco Gateway Academy - UST CICS
                        </h2>
                        <h6 className='education-year'>A.Y 2019-2020</h6>
                        
                        <p className='education-text'>Vice President for Creatives</p>
                        <p className='education-text'>College of Information and Computing Sciences</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card-org">
                    <img src={cnagLogo} alt="beca" className='org-logo'/>
                        <h2 className='education-heading'>
                            Cisco Gateway Academy - UST CICS
                        </h2>
                        <h6 className='education-year'>A.Y 2020-2021</h6>
                        
                        <p className='education-text'>Vice President for Audit and Logistics</p>
                        <p className='education-text'>College of Information and Computing Sciences</p>
                    </div>
                </div>

            </div>


            

            
        </div >
    )
}

export default Education