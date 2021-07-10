import React from 'react';
import './App.css';
import axios from 'axios';
import galleryItems from '../../../server/modules/gallery.data';


function App() {


    useEffect(() => {
    getGalleryItems();
  }, [])

    const getGalleryItems = () => {
    axios.get('/gallery')
    .then(response => {
      getGalleryItem(response.data);
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
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
