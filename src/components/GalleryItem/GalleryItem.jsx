//this is where we get the individual items via image


//create a conditional rendering when clicking on
//photo, it swaps between a description or photo
//Try boolean
import react from 'react';
import {useState} from 'react';
import './GalleryItem.css'

function GalleryItem ({image}){
    const [display, setDisplay] = useState(true);
    console.log(`What is GalleryItem doing`, image);

    const toggleDisplay = () => {
    console.log('Image has been clicked');
    //set state
    setDisplay(!display)
    }
    // const updateLikes

    return (
        <>
        <section onClick={() => toggleDisplay(image.id)}  className="galleryItem">
            { display &&
            <img className="photoItem" src={image.path} alt={image.description}/>}
            { !display &&
            <p>{image.description}</p>}
        {/* <button type='button' onClick={() => updateLikes(image.id)}>Likes {image.likes}</button> */}
        </section>
        </>
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




    //     <div className="users">
    //   {data.map((user) => (
    //     <div className="user">{user}</div>
    //   ))}
    // </div>