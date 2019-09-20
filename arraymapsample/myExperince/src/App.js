import React from 'react'
import Experince from './experince'
import experinceData from'./experinceData'
class App extends React.Component{
  constructor(){
      super()
      this.state={
          experince1: experinceData
      }
      
  }
render(){
    const experinceItems = this.state.experince1.map(item =><experince key={item.id} Experince={item}/>)
    return(
        <div className="List of some experince">
            {experinceItems}
        </div>
    )
}


    
}export default App;