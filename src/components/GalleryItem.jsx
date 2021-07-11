//this is where we get the individual items via props


//create a conditional rendering when clicking on
//photo, it swaps between a description or photo
//Try boolean
import react from 'react';
import {useState} from 'react';


function GalleryItem (prop){
    const imageArray = prop.GalleryItem;

    
    console.log(`What is GalleryItem doing`, prop);



return (
    <div className="galleryItem">
        <p>Testing from Gallery List</p>
        { imageArray.length > 0 &&
        imageArray.map(image =>(
        <GalleryItem 
            key={
                image.id, 
                image.path, 
                image.description, 
                image.likes}
            />)
        )}
    </div>    
)
}

export default GalleryItem;

// Saving for later in case my testing doesn't work on the return.
        // <GalleryItem 
        //     key={
        //         image.id, 
        //         image.path, 
        //         image.description, 
        //         image.likes}