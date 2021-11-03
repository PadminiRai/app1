import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 11
    }
    render() { 
            return <div>
                {/* <span>{this.state.count}</span> */}
                <span>{10+1*3}</span>
                <button>inc</button>
                </div>;
    }
}
 
export default Counter;