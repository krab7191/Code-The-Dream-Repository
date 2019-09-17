import React,{Component} from 'react'
class Skills extends Component{
    render(){
        return(
            <div>
                <h3 style={{textDecoration:'underline', border: '1px solid white' , paddingLeft: '83px', paddingRight: '83px'}}>
                    Skills Matrix:
                    
                </h3>
                    <ul style={{ border: '1px solid white' , paddingLeft: '130px'}}>
                       <li>{this.props.Mule}</li><br/>
                       <li>{this.props.IDEs}</li><br/>
                       <li>{this.props.Web}</li><br/>
                       <li>{this.props.ProgrammingLanguage}</li><br/>
                       <li>{this.props.Environments}</li><br/>
                       <li>{this.props.Databases}</li><br/>
                       <li>{this.props. VersionControlTools}</li><br/>
                       <li>{this.props. BuildTools}</li><br/>
                       <li>{this.props.TestingTools}</li><br/>
                       <li>{this.props.Languages}</li><br/>

                        
                    </ul>
            </div>
        )
    }
}export default Skills;