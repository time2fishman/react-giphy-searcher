import { SearchIcon } from '../shared/AppIcons';

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
            <button type='submit'>
                <SearchIcon height='2rem' width='2rem' />
            </button>
        </form>
    );
};

export default SearchForm;