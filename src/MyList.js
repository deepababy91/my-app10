import React from 'react'

export default function MyList(props) {
    return (
        <div>
            {
                props.comments.map((comment, index) => {
                    return <div>{comment}</div>

                })
            }
        </div>
    )
}
