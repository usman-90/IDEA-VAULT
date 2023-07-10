import React, { useState } from "react";

function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    console.log("target files", event.target.files);
    if (event.target.files.length > 6) {
      alert("only six images are allowed");
      return;
    }
    const files = Array.from(event.target.files);

    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imagePreviews);
  };

  return (
    <div className="imageuploader my-4 ">
      <input
        type="file"
        name="images"
        id="images"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <h4>Upload Images</h4>
      <div className="overflow-auto h-100">
        {selectedImages.map((image) => (
          <img src={image} alt="Preview" key={image} />
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
