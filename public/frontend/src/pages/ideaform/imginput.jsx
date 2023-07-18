/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useState } from "react";

const ImageInput = ({ setcardImage }) => {
  const [pictureImageTxt, setPictureImageTxt] = useState("Choose an image");

  function handleInputChange(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    setcardImage(file);
    if (file) {
      const reader = new FileReader();
      console.log(reader);
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;

        const img = (
          <img
            src={readerTarget.result}
            className="picture__img"
            alt="Selected"
          />
        );

        setPictureImageTxt("");
        setPictureImage(img);
      });

      reader.readAsDataURL(file);
    } else {
      setPictureImageTxt("Choose an image");
      setPictureImage(null);
    }
  }

  const [pictureImage, setPictureImage] = useState(null);
  return (
    <div className="position-static w-100 h-75">
      <label className="picture" htmlFor="picture__input" tabIndex="0">
        <span className="picture__image">
          {pictureImage || pictureImageTxt}
        </span>
      </label>
      <input
        type="file"
        name="picture__input"
        id="picture__input"
        onChange={handleInputChange}
        multiple
      />
    </div>
  );
};

export default ImageInput;
