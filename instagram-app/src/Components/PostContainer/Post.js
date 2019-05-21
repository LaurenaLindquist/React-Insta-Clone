import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div>
            <PostHeader 
                username={props.data.username}
                thumbnailUrl={props.data.thumbnailUrl}
            />
            <div>
                <img 
                    alt='post-thumbnail'
                    className='post-image'
                    src={props.data.imageUrl}
                />
            </div>
            <CommentSection comments={props.data.comments} />
        </div>
    )
};

export default Post; 