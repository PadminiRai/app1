import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value : this.props.value
        // ,
        // imageUrl : 'https://picsum.photos/200' ,
        // tags : ['t1','t2','t3']
};

// constructor(){
//     super();
//     this.incrementCount=this.incrementCount.bind(this);
// };

style = {
 fontSize: 75,
 fontWeight:'bold'
};

render() { 
         
    console.log("props",this.props);
            return  (
                <div>
                 <h4> &nbsp;{this.props.id}</h4>
                {/* {this.props.children} */}
                {/* <span>{this.state.count}</span> */}
                {/* <span>{10+1*3}</span> */}
                {/* <img alt='' src={this.state.imageUrl}/> */}
                <span id='s1' style={this.style} className={this.getBadgeClass()}>{this.formatCount()}</span>
                {/* onClick is an event handler */}
                <button onClick={()=>this.incrementCount({id:1})} className='btn btn-secondary btn-sm'>increment</button>
                 {/* <ul>
                     {this.state.tags.map(tags => <li key={tags}>{tags}</li>)}
                 </ul> */}
                 <button className="btn-sm btn-danger m-2" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
                </div>
            );
}

getBadgeClass() {
        let classes = 'badge m-3 badge-';
        classes += this.state.value !== 0 ? 'primary' : 'warning';
        return classes
};

formatCount(){
        const {value} = this.state;
        // const x = <h1>Zero</h1>;
        return value===0?'Zero':value;
        // return count===0?x:count;
};

// incrementCount(){
// console.log('this.state.count+1',this.state.count = this.state.count+1);
// // this is undefined so either use a constructor to bind 'this' with the function or make it an arrow function.

// }
  
incrementCount=product=>{
    console.log('this.state.count+1', product, this.state.value+1);
    this.setState({value:this.state.value+1});
    // when ever changing state vdom gets compared to the DOM and only span gets changed than 
    // the entire page , can be seen in elements while clicking on the button.
};

}


export default Counter;