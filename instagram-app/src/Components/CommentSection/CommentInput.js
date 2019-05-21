import React from 'react';

const CommentInput = props => {
    return(
        <form>
        <input type='text' placeholder= 'Add comment...' value={props.newComment}/>
        <button>Submit Comment</button>
        </form>
    )
}

export default CommentInput;