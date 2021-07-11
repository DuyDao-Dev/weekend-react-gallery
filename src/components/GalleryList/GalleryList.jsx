import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList ({photoGalleryItems}){

    
    // console.log(`What is galleryList doing`, photoGalleryItems);

    
    return(
    <>
    <div className="galleryList">
        <p>Testing from Gallery List</p>   
        {photoGalleryItems.map(image =>
        {return (
        <GalleryItem 
            key={image.id} 
            image={image} 
             />)})
        }
    </div>
    </>
    )
}

export default GalleryList;


// updateLikes={photoGalleryItems.updateLikes}