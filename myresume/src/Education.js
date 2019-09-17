import React,{Component} from 'react'
 //import {Grid,Cell} from 'react-mdl';
 class Education extends Component{
    render(){
    return(
        <div>
                <div>
                     <ul style={{ border: '1px solid white' , paddingLeft: '80px', paddingRight: '83px',marginBlockStart: '1em',
                        marginBlockEnd:' 1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                         <b> {this.props.Field}</b>
                          {this.props.startYear}-{this.props.EndYear} <br/>
                          <b>{this.props.Country}</b>
                     

                           <ul style={{ border: '1px solid white' , paddingLeft: '45px'}}>
                          <li  >{this.props.Description}</li> <br/>
                          </ul>
                       </ul>   
                    
                </div>

          <div>
                      <h3 style={{textDecoration:'underline', border: '1px solid white' , paddingLeft: '83px', paddingRight: '83px'}}>
                      Award and Certifications</h3>
                        <b><ul style={{ border: '1px solid white' , paddingLeft: '83px'}}>{this.props.certif}</ul></b>
                        <ul style={{ border: '1px solid white' , paddingLeft: '130px'}}>
                            <li>{this.props.Award1}</li><br/>
                            <li>{this.props.Award2}</li><br/>
                        </ul>
                   </div>
            </div>
                      

                     
        )
    }}
       
         
            
export default Education;