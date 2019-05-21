import React from 'react';

const SearchBar = () => {
    return (
        <div>
        <div>
            <img alt='instagram logo'  />
        </div>
        <div>
            <input type='text' placeholder='Search' />
        </div>
        <div>
            <div className='social'>
                <i className='fa fa-compass' />
            </div>
            <div className='social'>
                <i className='fa fa-heart' />
            </div>
            <div className='social'>
                <i className='fa fa-circle' />
            </div>
        </div>
    </div>
    )

};

export default SearchBar;