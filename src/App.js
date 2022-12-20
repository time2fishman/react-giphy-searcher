import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useState, useEffect } from 'react'


function App() {
  const [images, setImages] = useState([])
  
  useEffect(() => {
    getImages()
  }, [])
  
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    offset: 0,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };
  
  function getImages() {
    const searchString = 'guardians'
    // Build a URL from the searchOptions object
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setImages(response.data)
      })
      .catch(console.error)
  }

  return (
    <div className="App">
      <h1>Giphy Searcher</h1>
      <SearchForm />
      <SearchResults images={images} />
    </div>
  );
}

export default App;
