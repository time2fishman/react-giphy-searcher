import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SearchHeader from "./components/SearchHeader";
import { useState, useEffect } from 'react'


function App() {
  const [images, setImages] = useState([])
  const [searchString, setSearchString] = useState('')
  const [lastSearch, setLastSearch] = useState('')
  
  useEffect(() => {
    getImages(searchString)
  }, [])
  
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    offset: 0,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };
  
  function getImages(searchString) {
    // Build a URL from the searchOptions object
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data)
        setLastSearch(searchString)
        setSearchString('')
      })
      .catch(console.error)
  }

  function handleChange(event) {
    setSearchString(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    getImages(searchString)
  }

  return (
    <div className="App">
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
      <SearchResults images={images} />
    </div>
  );
}

export default App;
