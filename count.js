import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class count extends Component {
    constructor(props){
        super(props)
            this.state ={
             car : [{
                 name : "Maruthi",
                 model :"2020",
                 speed :"30"
             },
             {
                name : "xent",
                 model :"2019",
                 speed :"40" 
             }
             ]}
}
    
   render(){
       return(
       <div>
           {this.state.car.map(carItem=>
           <Card>
               {carItem.name}
               {carItem.model}
               {carItem.speed}
           </Card> 
             ) }
           </div>   
     
       )
   }
}

export default count
