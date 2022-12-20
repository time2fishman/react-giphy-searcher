import React from 'react';

const SearchForm = () => {
    return (
        <form className='form-horizontal'>
            <input placeholder='Search' type='text' name='searchString' required />
            <button type='submit'>Search</button>
        </form>
    );
};

export default SearchForm;