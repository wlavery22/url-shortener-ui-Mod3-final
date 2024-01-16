import { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);
  // const [error, setError] = useState('')

  // const getUrls = () => {
  //     return fetch('http://localhost:3001/api/v1/urls')
  //         .then(response => response.json())
  //         .then(data => 
  //           console.log(data))
  //           setUrls(data)
  //   }
  useEffect(() => {
    getUrls()
    .then(data => {
      console.log(data.urls)
      setUrls(data.urls)
    })
  }, []);
    // .then(data => {
    //   console.log(data)
    //   setUrls([...urls, ...data])
    // })
  //   .catch(error => setError(error.message)) 
  // }, [])
  // useEffect(() => {
  //   getAllIdeas()
  // }, []);

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm/>
      </header>

      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
