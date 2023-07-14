/* eslint-disable no-unused-vars */
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "./firebase.jsx";

export const uploadImage = async (path, file) => {
  const imagesRef = ref(storage, `images/${path}`);
  uploadBytes(imagesRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};
export const getUrl = async (path) => {
  const imageRef = ref(storage, `images/${path}`);
  const url = await getDownloadURL(imageRef);
  return url;
};
