import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList ({photoGalleryItems, updateLikes}){

    
    // console.log(`What is galleryList doing`, photoGalleryItems);

    
    return(
    <>
    <div className="galleryList">
        <p>Photo Gallery</p>   
        {photoGalleryItems.map(image =>
        {return (
        <GalleryItem 
            key={image.id} 
            image={image}
            updateLikes={updateLikes}
             />)})
        }
    </div>
    </>
    )
}

export default GalleryList;


