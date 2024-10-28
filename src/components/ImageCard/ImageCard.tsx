
import s from './ImageCard.module.css';
import { Image } from '../../types';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

 const ImageCard=({ image, onClick }: ImageCardProps)=> {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img className={s.image} src={image.urls.small} alt={image.alt_description || ''} />
    </div>
  );
}
export default ImageCard;