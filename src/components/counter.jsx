import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 1,
        imageUrl : 'https://picsum.photos/200' ,
        tags : ['t1','t2','t3']
};

// constructor(){
//     super();
//     this.incrementCount=this.incrementCount.bind(this);
// }

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
                <span id='s1' style={this.style} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button onClick={this.incrementCount} className='btn btn-secondary btn-sm'>increment</button>
                 <ul>
                     {this.state.tags.map(tags => <li key={tags}>{tags}</li>)}
                 </ul>
                </div>
            );
}

getBadgeClass() {
        let classes = 'badge m-3 badge-';
        classes += this.state.count !== 0 ? 'primary' : 'warning';
        return classes
}

formatCount(){
        const {count} = this.state;
        // const x = <h1>Zero</h1>;
        return count===0?'Zero':count;
        // return count===0?x:count;
}

// incrementCount(){
// console.log('this.state.count+1',this.state.count = this.state.count+1);
// // this is undefined so either use a constructor to bind 'this' with the function or make it an arrow function.

// }
  
incrementCount=()=>{
    console.log('this.state.count+1', this.state.count+1);
    this.setState({count:this.state.count+1});
}

}


export default Counter;