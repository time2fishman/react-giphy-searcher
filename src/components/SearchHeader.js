import logo from '../giphy-searcher-logo.svg';

const SearchHeader = ({ lastSearch }) => {
    return (
        <header>
            <div className='brand'>
                <img src={logo} alt='' />
                <h1>Giphy Searcher</h1>
            </div>
            <p className='muted'>
                Showing results for <strong>{lastSearch}</strong>
            </p>
        </header>
    );
};

export default SearchHeader;