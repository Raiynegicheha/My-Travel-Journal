import React from 'react';
import './App.css';
import Nav from './components/Header';
import Post from './components/Post';
import data from './data';




function App() {

  const newPost = data.map(post =>{
    return (
      <Post 
      title = {post.title}
      location = {post.location}
      googleMapsUrl = {post.googleMapsUrl}
      startDate = {post.startDate}
      endDate = {post.endDate}
      description = {post.description}
      imageUrl = {post.imageUrl}
      />
    )
  })


  return (
    <div className="App">
      <Nav/>
      <section className='posts'>{newPost}</section>
      
    </div>
  );
}

export default App;
