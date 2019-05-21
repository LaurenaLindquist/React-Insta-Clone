import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            {props.data.map(d => <Post key={d.imageUrl} data={d} />)}
        </div>
    )
};

export default PostContainer;