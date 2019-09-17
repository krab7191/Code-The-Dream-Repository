import React from 'react'
import ReactDom from 'react-dom'
import Skills from './Skills'
import Experiences from './Experience'
import Education from './Education'
import Footer from './footer'
import Logo from './mulelego.jfif';
class Resume extends React.Component{
 constructor(props){
 super(props);

 this.state={}

 
}

    render(){
       return(
          <div>
                <div className="ui Resume" style={{textAlign:'center' }}  >
                  <h2 >
                  <ul style={{textAlign:'center', lineHeight: "4pt"}} ><img src={Logo} Align="center" height="70"/>
                    Aster Ghebreyesus
                    </ul>
                  <ul style={{textAlign:'center', lineHeight: "4pt"}}  >
                    Baltimore,MD ,samone@gmail.com ,200-451-4573</ul>
                  <ul style={{textAlign:'center', lineHeight: "4pt"}}  >Permanent Work Authorization. No Visa sponsorship required </ul>
                   </h2>
                    <hr style={{boredTop:'6px solid #833fb2', width:'80'}} ></hr>
                </div>

                <div>
                  <h3>
                  <ul style={{ textDecoration:'underline', border: '1px solid white' , paddingLeft: '80px'}} >Professional Summary :</ul>
                  </h3>    
                  <p style={{ border: '1px solid white' , paddingLeft: '83px', paddingRight: '83px'}} >
                    Software Engineer with 3 years of experience in developing enterprise level web and windows-based
                    applications and SDLC processes including documentation, form designs, coding, unit testing and defect resolution.
                    Technical support, supervisory leadership, and management for more than two years. 
                   </p> 
                
                 
                </div>
                
                  

          <Skills Mule="Mule: Any Point Studio, Mule EE 3.3+, RAML, Data Weave, Cloud hub, MMC." 
                  IDEs ="	IDEs:   Any-Point Studio, visual studio"
                  Web=" Web Methods: API, SOAP - API, WSDL - API, HTTP, XML, REST."
                  ProgrammingLanguage="Programming Language: .Net, C, PHP, HTML, Java, and JavaScript."
                  Environments="Environments: Windows XP/7/8, Linux, Ubuntu, Mac."
                  Databases ="Databases: Mongo DB, MySQL, IBM DB2, MS SQL Server, RDBMS, XML, DTD, XSD."
                  VersionControlTools= "	Version Control Tools: GitHub, SVN."
                  BuildTools="Build tools: Maven, and Jenkins."
                  TestingTools="Testing tools:  Postman, Soap UI, and M-unit."
                  Languages="Languages: English and Tigrigna."

          />

          <Experiences 
           Roll1 ="Software Developer ,March 2010- May 2015"
           company1 ="Delta Information System, Asmara, Eritrea"
           CompanyDecription1 ="It Is one of the Soap and Liquid detergents products manufacturing company"
           List1 ="	Designed Back-end database for new software based on client requirements and used SQL commands to manipulate and access the database"
           List2="	Wrote code to create new software and customized pre-existing software’s based on the solution architect gathered data using VB.Net and increase the performance of the software development team by 70%."
           List3="	Performed several unit and functional testing processes for user approval for more than 60%."
           list4 ="	Designed documents and training manual for client use when implementing new systems as a guideline for learning and understanding new system"
            
           Roll ="Database Programmer  ,March 2010- May 2013"
           company ="Asmara OMO  , Asmara, Eritrea"
           CompanyDecription ="Top IT consulting firm which provides ERP and Financial software solutions to manufacturing and financial organizations in the country."
           List ="Create new tables in the database as per the requirement and associated shell scripts to schedule and execute them."
           List1="Participated in Configuration/Troubleshooting of fixed users and files while setting up these databases"
           List2="Performed tuning and optimization on SQL queries"
           list3 ="	Designed documents and training manual for client use when implementing new systems as a guideline for learning and understanding new system"
            
          />
          <h3 style={{ textDecoration:'underline', border: '1px solid white' , paddingLeft: '80px'}}>Education</h3>
           
           
           <Education 
                 Field="Bachelor of Science in Computer Engineering  ,2003-2008"
                 Country="Eritrean Institute of Technology (EIT), Asmara, Eritrea "
                 Description="Equivalent to U.S. Bachelor’s degree in the filed from the accredited intuition according to world educational service in 2019.
                 Evaluation available upon request"
                 
                  
                 certif="Certifications:"
                 Award1="Mule-Soft Certified Developer version 3.9  ,   2019"
                 Award2="Cisco, Certification, UMBC ,2016"
	               Award3="Business and Accounting  Certificate, Delta Information System ,2013"
                 />
                
                 

                <Footer 
                   pageNo="page1"
                  />


          

           </div>
             
        )
    }
}

ReactDom.render(<Resume/> ,document.querySelector("#root"))