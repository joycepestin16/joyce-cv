import React from 'react'
import './Home.css'
import logo from "./img/logo.png"

function Home() {
  return (
    <div className='home'>
        <div className='home-bg'>
            <div className='header d-flex align-items-center pxy-30'>
                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>

                <div className='navigation pxy-30'>
                    <ul className='navbar d-flex'>
                        <a href="#Home"><li className='nav-item mx-15'>Home</li></a>
                        <a href="#Home"><li className='nav-item mx-15'>About</li></a>
                        <a href="#Home"><li className='nav-item mx-15'>Education</li></a>
                        <a href="#Home"><li className='nav-item mx-15'>Experience</li></a>
                        <a href="#Home"><li className='nav-item mx-15'>Contact</li></a>
                    </ul>
                </div>
            </div>

            {/* home content */}
            <div className='container'>
                <div className='home-content'>
                    <div className='home-meta'>
                        <h1 className='home-text pz-10'>
                            WELCOME TO MY SPACE
                        </h1>
                        <h2 className='home-text pz-10'>
                            Hello, I'm Joyce Ann Pestin
                        </h2>

                        <h3 className='home-text sweet'>
                            Web and Mobile Developer
                        </h3>

                        <h4 className='home-text pz-10'>
                            from UST
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home