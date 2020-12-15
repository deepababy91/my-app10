import React, { Component, createRef } from 'react';
import MyFormC from './MyFormC';
import MyListC from './MyListC';

export default class AppC extends Component {
    constructor(){
        super();
     
        this.state={
            comments:[]
        }
        this.commentRef= createRef();
       this.handleClick = () =>{
            this.setState({comments:[...this.state.comments, this.commentRef.current.value]})
            //console.log('handleClick:' + comments);
    
      }
    }
      componentDidMount(){//useeffect
        console.log("useeffect:"+this.state.comments);

      }
    render() {
        return (
            <div className="App">
            <MyFormC handleClick={this.handleClick} commentRef={this.commentRef} />
            <MyListC comments={this.state.comments} />
          </div>
        )
    }
}
