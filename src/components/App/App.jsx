import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';


function App() {

    let [photoGalleryItems, setPhotoGalleryItems] = useState([]);

    useEffect(() => {
    getGalleryItems();
  }, [])

    const getGalleryItems = () => {
    axios.get('/gallery')
    .then(response => {
      setPhotoGalleryItems(response.data);
    }).catch (err => {
      console.log('Errors from GET', err);
    })
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList photoGalleryItems={photoGalleryItems}/>
        {/* <GalleryItem/> */}
      </div>
    );
}

export default App;
