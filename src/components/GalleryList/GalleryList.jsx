import react from 'react';
import galleryItem from '../GalleryItem/GalleryItem';



function GalleryList (props){
    const imageArray = props.galleryItems;


    
    console.log(`What is galleryItems doing`, props);

    
    return(
    <>
        <div className="galleryItem">
            <p>Testing from Gallery List</p>
            {props.galleryPhotos.map(image =>
            <GalleryItem key={image.id} image={image}/>)
            }
        </div>
    </>
    )
}

export default GalleryList;


