import React from 'react'
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import javascriptIcon from './img/javascript.png';
import cssIcon from './img/css.png';
import htmlIcon from './img/html.png';
import btIcon from './img/bootstrap.png';
import javaIcon from './img/java.png';
import mswordIcon from './img/word.png';
import excelIcon from './img/excel.png';
import pptIcon from './img/ppt.png';
import reactIcon from './img/react.png';
import reactnIcon from './img/reactn.png';
function Skills() {
  return (
    <div className='skills component-space' id='Skills'>
      <div className='heading'>
        <h1 className='heading'>Technical Skills</h1>
      </div>

      {/* cards for skills */}
      {/* Javascript */}
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <div className='skills-box pointer'>
              <div className='icon'>
                <img src={javascriptIcon} alt="Javascript Icon" className='javascript-icon' />
              </div>
              <div className='skills-meta'>
                <h1 className='skills-text sweet'>
                  Javascript
                </h1>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className='col-3'>
            <div className='skills-box pointer'>
              <div className='icon'>
                <img src={cssIcon} alt="CSS Icon" className='css-icon' />
              </div>
              <div className='skills-meta'>
                <h1 className='skills-text sweet'>
                  CSS
                </h1>
              </div>
            </div>
          </div>

          {/*   HTML */}
          <div className='col-3'>
            <div className='skills-box pointer'>
              <div className='icon'>
                <img src={htmlIcon} alt="Javascript Icon" className='html-icon' />
              </div>
              <div className='skills-meta'>
                <h1 className='skills-text sweet'>
                  HTML
                </h1>
              </div>
            </div>
          </div>
          {/* BOOTSTRAP */}
          <div className='col-3'>
            <div className='skills-box pointer'>
              <div className='icon'>
                <img src={btIcon} alt="bootstrap Icon" className='bt-icon' />
              </div>
              <div className='skills-meta'>
                <h1 className='skills-text sweet'>
                  Bootstrap
                </h1>
              </div>
            </div>
          </div>

          {/*  JAVA */}
          <div className='col-3'>
            <div className='skills-box pointer'>
              <div className='icon'>
                <img src={javaIcon} alt="bootstrap Icon" className='java-icon' />
              </div>
              <div className='skills-meta'>
                <h1 className='skills-text sweet'>
                  JAVA
                </h1>
              </div>
            </div>
          </div>

          <div className='col-3'>
              <div className='skills-box pointer'>
                <div className='icon'>
                  <img src={reactIcon} alt="React Icon" className='react-icon' />
                </div>
                <div className='skills-meta'>
                  <h1 className='skills-text sweet'>
                    React JS
                  </h1>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='skills-box pointer'>
                <div className='icon'>
                  <img src={reactnIcon} alt="React Native Icon" className='reactn-icon' />
                </div>
                <div className='skills-meta'>
                  <h1 className='skills-text sweet'>
                    React Native
                  </h1>
                </div>
              </div>
            </div>

        </div>
      </div>

      <div className='skills component-space'>
        <h1 className='heading2'>Google Suites</h1>

        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='skills-box pointer'>
                <div className='icon'>
                  <img src={mswordIcon} alt="MS Word Icon" className='word-icon' />
                </div>
                <div className='skills-meta'>
                  <h1 className='skills-text sweet'>
                    MS Word
                  </h1>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className='col-3'>
              <div className='skills-box pointer'>
                <div className='icon'>
                  <img src={excelIcon} alt="Excel Icon" className='excel-icon' />
                </div>
                <div className='skills-meta'>
                  <h1 className='skills-text sweet'>
                    Excel
                  </h1>
                </div>
              </div>
            </div>

            {/*   HTML */}
            <div className='col-3'>
              <div className='skills-box pointer'>
                <div className='icon'>
                  <img src={pptIcon} alt="Powerpoint Icon" className='ppt-icon' />
                </div>
                <div className='skills-meta'>
                  <h1 className='skills-text sweet'>
                    Powerpoint
                  </h1>
                </div>
              </div>
            </div>

            
            


        
           

          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills