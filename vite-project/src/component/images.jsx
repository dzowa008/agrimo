import React from 'react';
import '../styles/images.css'; 

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      {/* Image 1: Watering plants */}
      <img 
        className="gallery-image large"
        src="../src/assets/bde72453d25513544e789beaca83af7961c79463.jpg" 
        alt="Woman and child watering plants" 
      />

      {/* Image 2: Harvesting tomatoes */}
      <img 
        className="gallery-image medium"
        src="../src/assets/82bc9ac70ca50998707cfe030cf4e703c393e24e.jpg" 
        alt="Woman harvesting tomatoes" 
      />

      {/* Image 3: Close-up of picking fruit */}
      <img 
        className="gallery-image small"
        src="..\src\assets\9c7865afd444a357de03d2f1768d8af4877c0715.jpg" 
        alt="Close-up of hand picking fruit" 
      />

      {/* Image 4: Farmer with VR headset */}
      <img 
        className="gallery-image large-right"
        src="..\src\assets\ff8f5bfcace557de14de4caf5d27c471e5713a22.jpg" 
        alt="Man wearing a VR headset while harvesting" 
      />
    </div>
  );
};

export default ImageGallery;
