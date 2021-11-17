import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {

    state={
        counters :[ {id:1,value:5},
                    {id:2,value:0},
                    {id:3,value:0} ]
    };

    handleDelete = (counterID) =>{

        console.log("Event called",counterID);
    }
    render() { 
      
        return(<div>
           
                {this.state.counters.map( counter =>
                    <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete} id={counter.id} selected={true}>
                    {/* this is the child either use this or put a id prop in counter tag*/}
                    {/* <h4>Counter #{counter.id}</h4>   */}
                    </Counter>  
                    ) }
           
        </div>) ;
    }
}
 
export default Counters;