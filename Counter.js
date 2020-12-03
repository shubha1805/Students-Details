  import React, { Component } from 'react';

  class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
        
      };
    }

    handleClicks = (condition) => {
      if (condition.toLowerCase() === 'increment') {
        this.setState((state, props) => ({ clicks: state.clicks +1 }));
      }
      else if (condition === 'decrement'){
        this.setState((state, props) => ({ clicks: state.clicks -1 }));
      }
      else  {
        this.setState((state, props) => ({ clicks: 0 }));
      }
    };
    
   
  
  render  () { 
    return(
    <div>
      <h1>{this.state.clicks}</h1>
      <button onClick={()=> this.handleClicks('increment')}>Increment</button>;
      <button onClick={()=> this.handleClicks('decrement')}>Decrement</button>;
      <button onClick={()=> this.handleClicks('reset')}>reset</button>;
  
    </div>

    );
  }
};

 export default Counter;  