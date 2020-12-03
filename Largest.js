import React, {Component, Fragment } from 'react'

class Largest extends Component {
    constructor(props){
        super()
        this.state = {
            largest : [1, 9, 8, 4, 5, 3, 2],
            show : false,
            maxValue : [],

        }

    }

    getItem = (largeArray) =>{
        let maxValue = 0

        largeArray.forEach (item => {
            if (item > maxValue){
                maxValue = item
            } 
            
        });
        this.setState({ show: true , maxValue})
    }

    render(){
        const  {largest, maxValue} = this.state
    return (
        <Fragment>
            <h1>Find the Largest in an Array </h1>
            <div>
                { largest.map(item => (
                    <span>{item}</span>
                )) } </div>
                <button onClick={()=>this.getItem(largest)}>click</button>
                <div>{this.state.show && maxValue}</div>
        </Fragment>
    );
}
}

export default Largest
