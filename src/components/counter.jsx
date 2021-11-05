import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
        imageUrl : 'https://picsum.photos/200'
    };

style = {
 fontSize: 75,
 fontWeight:'bold'
};

    render() { 
            return  (
                <div>
                {/* <span>{this.state.count}</span> */}
                {/* <span>{10+1*3}</span> */}
                <img alt='' src={this.state.imageUrl}/>
                <span style={this.style} className='badge badge-primary m-3'>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>increment</button>
                </div>
            );
    }
    formatCount(){
        const {count} = this.state;
        const x = <h1>Zero</h1>;
        return count===0?'Zero':count;
        // return count===0?x:count;

    }
    
}


export default Counter;