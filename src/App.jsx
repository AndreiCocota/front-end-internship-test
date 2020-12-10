import React, { useState, useEffect } from 'react';
import './App.scss';
import Card from './components/Card';


function createCard(item) {
  return (
    <Card 
      key = {item.id}
      image = {item.thumbnail.small}
      title = {item.title}
      content={item.content}
      name = {item.author.name}
      role = {item.author.role}
      date = {item.date}
      largeImage = {item.thumbnail.large}
      avatar = {item.author.avatar}
    />
  )
}


function App() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
          (error) => {
            setError(error);
          }
        )
  }, [])

  if(error) {
    return <div>Eroor: {error.message}</div>
  }  else {
    return (
    <div className="App">
      
        {items.map(item => (
          createCard(item)
        ))}
      
    </div>  

    )
  }

  
}

export default App;
