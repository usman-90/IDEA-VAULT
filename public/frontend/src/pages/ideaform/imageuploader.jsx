import { useEffect, useState } from "react";
function ImageUploader({ setSelectedImages, selectedImages }) {
  const [imagePreview, setimagePreviews] = useState([]);
  useEffect(() => {
    setimagePreviews(selectedImages ?? []);
    console.log(selectedImages);
  }, []);
  const handleImageChange = (event) => {

    if (event.target.files.length > 6) {
      alert("only six images are allowed");
      return;
    }
    const files = Array.from(event.target.files);
    console.log(files);
    setSelectedImages(files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setimagePreviews(imagePreviews);
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
        {imagePreview.map((image) => (
          <img src={image} alt="Preview" key={image} />
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
