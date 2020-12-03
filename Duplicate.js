import React, { Component, Fragment } from 'react'

class Duplicate extends Component {
    constructor(props){
        super()
        this.state = {
            duplicate : [1,9,8,4, 5 ,3, 2],
            show : false,
            duplicateResults: []
           }

    }

    getFilter = (numArray) => {
        const duplicateObject = {}
        const duplicates = []
        numArray.forEach (item => {
            if (duplicateObject[item]){
                duplicateObject[item] = duplicateObject[item] + 1
                duplicates.push(item)
            } else{
                duplicateObject[item] = 1
            }
            
        });
            
        this.setState({ 
            show: true, 
            duplicateResults: duplicates })

    }




    render () {
        const { duplicate, duplicateResults } = this.state
    return (
        
            <Fragment>
                <h1>Find Duplicate Data</h1>
                <div>
                { duplicate.map(item => (
                    <span>{item}</span>
                )) } </div>
                <button onClick={()=> this.getFilter(duplicate)}>Check Duplicate</button>
                <div>{this.state.show && duplicateResults.map(item =>
                <span>{item}</span> )}</div>
                <div>{duplicateResults.length}</div>
        
            </Fragment>

            
            
       
    )
}
}
export default Duplicate

