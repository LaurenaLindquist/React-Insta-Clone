import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    };

    addNewComment = e => {

    }

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />) }
                <CommentInput />
            </div>
        )
    }
}

export default CommentSection;

//state is dummy data. comments 
//render
//iterate over dummydata.comments, one comment at a time. Return Comment. 

//c, is each individual comment. We map