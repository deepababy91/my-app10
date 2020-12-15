import React, { Component } from 'react'

export default class MyFormC extends Component {
    render() {
        return (
            <div>
                <input type='text' placeholder='enter comment' ref={this.props.commentRef} />
                <button onClick={this.props.handleClick}>Add comment</button>
            </div>
        )
    }
}
