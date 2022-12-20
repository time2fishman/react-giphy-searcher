import React from 'react';

const SearchForm = ({ handleSubmit, handleChange, searchString }) => {
    return (
        <form className='form-horizontal' onSubmit={handleSubmit}>
            <input
                placeholder='Search'
                type='text'
                name='searchString'
                onChange={handleChange}
                value={searchString}
                required
            />
            <button type='submit'>Search</button>
        </form>
    );
};

export default SearchForm;