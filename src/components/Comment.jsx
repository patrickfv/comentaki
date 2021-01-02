import React from 'react'

function Comment({ comment }) {
    return (
      <div>
        Comment: { comment.content }
      </div>
    )
}

export default Comment