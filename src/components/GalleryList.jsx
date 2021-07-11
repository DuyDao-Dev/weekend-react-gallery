import react from 'react';
import {useState} from 'react';



function GalleryList (props){
    const imageArray = props.galleryItems;


    
    console.log(`What is galleryItems doing`, props);

    

return (
    <div className="galleryList">
        <img></img>
        <button>Like</button>
    </div>
    )
}

export default GalleryList;


