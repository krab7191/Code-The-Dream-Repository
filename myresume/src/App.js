
import React, { Component } from 'react'
import Skills from './Skills'
import SkillData from './SkillData'
import Logo from './mulelego.jfif';
import Education from './Education';
import Experience from './Experience'
import Development from './Development'
import Footer from './footer'
import './Mystyle.css'
class App extends Component {

    render() {
        const data = SkillData.map((skill, index) => <Skills key={index} skill={skill} />) // With a database you won't have to worry about having a unique id for each object like here, but generally you can use the array index for the key

        return (

            <div style={{
                height: 1400,
                width: 1000,
                padding: 'none',
                backgroundColor: 'white',
                boxShadow: '10px 10px 10px 10px black',
                margin: 'auto',
                overflowX: 'hidden',
                overflowY: 'hidden'
            }}>  {/* Extract this out into an external CSS file. (put it in Mystyle.css and give your element classes, or an id) */}

                <div className="ui Resume" style={{ textAlign: 'center' }}  >
                    <h4 className="header" ><img src={Logo} align="center" height="70" alt="my logo" />Aster Ghebreyesus </h4>
                    {/* Images need an alt attribute for accessability */}
                    <p className='Primary'>Baltimore, MD, 612-226-7135, astukahiwet@gmail.com</p> {/* You just have some grammar errors here */}
                    <p>Permanent Work Authorization. No Visa sponsorship required </p>
                    <hr style={{ boredTop: '6px solid #833fb2', width: '80' }} ></hr>
                </div>

                <div >
                    <h3 className="center " >Professional Summary : </h3>
                    <p className="paragraph" > {/* Good job externalizing your styling here. */}
                        Software Engineer with 3 years of experience in developing enterprise level web and windows-based
                        applications and SDLC processes including documentation, form designs, coding, unit testing and defect resolution.
                        Technical support, supervisory leadership, and management for more than two years.
                    </p>
                </div>

                <div className="Skill Matrix">
                    <h3 className="center"> Skill Matrix:</h3>
                    <div className="height">{data}</div>

                </div>

                <div className="Experience">
                    <h3 className="center"> Professional Experience:</h3>
                    <Experience />
                </div>

                <div className="Education">
                    <h3 className="center">Education: </h3>
                    <Education />
                </div>

                <div className="ProfDevelopment">
                    <h3 className="center">Professional Development:</h3>
                    <div style={{ paddingLeft: '80px' }}>
                        <Development />
                    </div>
                </div>
                <Footer pageNo="page1" />
            </div>
        )
    }
} export default App;
