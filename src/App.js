import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import News from './component/News/News';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //     const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d46fdf0d044444f58a6c061f8399e099'
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => setArticles(data.articles))
  // },[])
  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d46fdf0d044444f58a6c061f8399e099'
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article = {article}></News>)
      }
    </div>
  );
}

export default App;
