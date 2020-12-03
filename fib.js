import React,{Component} from 'react'
import  '../App.css';

export class fib extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fibData : [],
            data : [],
            value : [],
            duplicateArray :[]
        }
    }
    
    
  componentDidMount(){
      this.getItems(20)
      this.checkItems()
      this.fetchItems([2 ,15, 6, 34, 18, 1])
      this.duplicateItems()
  }
   
      getItems(fibLength){
        const fibArray = [0,1]
        for (var i=0; i< fibLength; i++) {
            const result = fibArray[i] + fibArray[i+1]
            fibArray.push(result)
        }
        this.setState({ fibData: fibArray})
    
    }

    checkItems(){
        const large =  [15, 2, 3,50,50, 4,]
        let max = 0;
       for (var i=0; i < large.length; i++){
           if(large[i] > max){
               max = large[i]
           }
       }  this.setState({ data: max })
    }
    
    fetchItems(sort){
      for(var i=0; i <sort.length; i ++ ){
            for(var j=0; j<sort.length; j++){
                if(sort[j] < sort[j + 1]){
                    const value     = sort[j+1]
                          sort[j+1] = sort[j]
                          sort[j]   = value
                }
            }
        } this.setState({value : sort})
    }

    duplicateItems(){
        const duplicate = [2, 3, 3, 4, 5, 6, 1, 9,1]
        const duplicateObject = {}
        const duplicates = []
        for(var i=0; i<duplicate.length;i++){
            if(duplicateObject[duplicate[i]]){
                duplicateObject[duplicate[i]] = duplicateObject[duplicate[i]] + 1
                duplicates.push(duplicate[i])
           } else {
                duplicateObject[duplicate[i] ] = 1
            }
        } this.setState({duplicateArray: duplicates})
                    
    }
    render() {
        const{fibData, data, value, duplicateArray}= this.state;
       return (
           <div className="arrays">
           <div>
              fibbonoci series == {fibData.map(item=>
                    <span>{item}</span>
                )} 
            </div><hr/>
              <div>  checking large == {data}</div><hr/>
               <div>sorting items  == {value.map(item=>
                <span>{item}</span>)}</div><hr/>
                <div>duplicate items === {duplicateArray}</div>
           </div>
        )
    }
}

export default fib
