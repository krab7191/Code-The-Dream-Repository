import React,{Component}from 'react'
class Experience extends Component{
    render(){
        return(
            <div>
                    <h3 style={{textDecoration:'underline', border: '1px solid white' , paddingLeft: '83px', paddingRight: '83px'}}>
                      Professional Experience:
                   </h3>
                    <ul style={{ border: '1px solid white' , paddingLeft: '83px',font:'3'}}>
                        <b>{this.props.Roll1}</b> <br/>
                       <b> {this.props.company1}</b><br/>
                        {this.props. CompanyDecription1}<br/>
                        <ul style={{ border: '1px solid white' , paddingLeft: '45px'}}>
                            <li>{this.props.List1} </li><br/>
                            <li>{this.props.List2} </li><br/>
                            <li>{this.props.List3}</li><br/>
                            </ul>
                            
                        

                 </ul>
                 <ul style={{ border: '1px solid white' , paddingLeft: '83px',font:'3'}}>
                        <b>{this.props.Roll}</b> <br/>
                       <b> {this.props.company}</b><br/>
                        {this.props. CompanyDecription}<br/>
                        <ul style={{ border: '1px solid white' , paddingLeft: '45px'}}>
                            <li>{this.props.List} </li><br/>
                            <li>{this.props.List1} </li><br/>
                            <li>{this.props.List2}</li><br/>
                          
                            
                        </ul>

                 </ul>
                 
            </div>   
                        
                        
                    
                   
                  
            
                    
        )
    }
}
export default Experience;
