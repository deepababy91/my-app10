import React, { Component } from 'react'

export default class MyListC extends Component {
    render() {
        return (
            <div>
            {
               this.props.comments.map((comment, index) => {
                    return <div>{comment}</div>

                })
            }
        </div>
        )
    }
}
