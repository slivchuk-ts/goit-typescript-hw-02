
import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"
import { Image } from '../../types';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}
const ImageGallery=({ images, onImageClick }: ImageGalleryProps) =>{
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;