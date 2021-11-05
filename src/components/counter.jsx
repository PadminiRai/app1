import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
        imageUrl : 'https://picsum.photos/200'
    };
    render() { 
            return  (
                <div>
                {/* <span>{this.state.count}</span> */}
                {/* <span>{10+1*3}</span> */}
                <img alt='' src={this.state.imageUrl}/>
                <span>{this.formatCount()}</span>
                <button className='btn btn-secondary'>inc</button>
                </div>
            );
    }
    formatCount(){
        const {count} = this.state;
        const x = <h1>Zero</h1>;
        // return count===0?'Zero':count;
        return count===0?x:count;

    }
    
}


export default Counter;