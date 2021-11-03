import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0
    };
    render() { 
            return  (
                <div>
                {/* <span>{this.state.count}</span> */}
                {/* <span>{10+1*3}</span> */}
                <span>{this.formatCount()}</span>
                <button>inc</button>
                </div>
            );
    }
    formatCount(){
        const {count} = this.state;
        // return count===0?'Zero':count;
        return count===0?<h1>Zero</h1>:count;

    }
    
}


export default Counter;