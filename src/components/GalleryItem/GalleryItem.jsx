import react from 'react';
import {useState} from 'react';
import './GalleryItem.css'

function GalleryItem ({image, updateLikes}){
    
    const [display, setDisplay] = useState(true);
    console.log(`What is GalleryItem doing`, image);//all objects in array being passed successfully!

    const toggleDisplay = () => {
    console.log('Image has been clicked');
    //set state
    setDisplay(!display)
    }

    return (
        <>
        <div className="container">
        <section onClick={() => toggleDisplay(image.id)}  className="galleryItem">
            { display &&
            <img className="photoItem" src={image.path} alt={image.description}/>}
            { !display &&
            <p className="itemDescription">{image.description}</p>}
        </section>
        </div>
        <button type='button' onClick={() => updateLikes(image.id)}>Likes {image.likes}</button>
        </>
    )
}

export default GalleryItem;
