import React from 'react'
import  Developmentlist from './Developmentlist'
class Development extends React.Component {
   constructor(props){
        super(props);
        this.State={
            Developmentlist:Developmentlist
        }
        }

    render() {
       
        
        return (
            <div>{
                this.State.Developmentlist.map((rowdata,exp) => 
                <div>
                    <h5 >{rowdata.Roll}</h5>
                

                {
                    (typeof(rowdata.detail)=='object')?
                    <div>
                        {rowdata.detail.map((subRowData,exp1) =>
                        <div>
                           <ul>
                               <li>{subRowData.detail1}</li>
                               <li>{subRowData.detail2}</li>
                               <li>{subRowData.detail3}</li>

                           </ul> 
                        </div>
                        )
                        }
                    </div>: null
                }
                
                
                </div>
                 )
                }
                 
            </div>
        )
    }
}export default  Development;