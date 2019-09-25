
import React from 'react'
import Skills from './Skills'
import SkillData from './SkillData'
import Logo from './mulelego.jfif';
import Education from './Education';
import Experience from './Experience'
import Development from './Development'
import Footer from './footer'
import './Mystyle.css'
class App extends React.Component {

    render() {
        const data = SkillData.map(skill => <Skills key={skill.id} skill={skill} />)

        return (

            <div style={{
                height: 1600,
                width: 1000,
                padding: 'none',
                backgroundColor: 'white',
                boxShadow: '10px 10px 10px 10px black',
                margin: 'auto',
                overflowX: 'hidden',
                overflowY: 'hidden'
            }}>

                <div className="ui Resume" style={{ textAlign: 'center' }}  >
                    <h4 className="header" ><img src={Logo} align="center" height="70" /> Aster Ghebreyesus </h4>
                     <p className='Primary' > Baltimore,MD ,612-226-7135,astukahiwet@gmail.com</p>
                     <p>Permanent Work Authorization. No Visa sponsorship required </p>
                    <hr style={{ boredTop: '6px solid #833fb2', width: '80' }} ></hr>
                </div>

                <div >
                    <h3 className="center " >Professional Summary : </h3>
                    <p className="paragraph" >
                        Software Engineer with 3 years of experience in developing enterprise level web and windows-based
                        applications and SDLC processes including documentation, form designs, coding, unit testing and defect resolution.
                        Technical support, supervisory leadership, and management for more than two years.
                    </p>
                </div>


                <div className="Skill Matrix">
                    <h3 className="center"> Skill Matrix:</h3>
                    <p className="height">{data}</p>
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
