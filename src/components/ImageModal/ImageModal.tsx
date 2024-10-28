import  ReactModal from "react-modal";
import s from "./ImageModal.module.css"
import { Image } from '../../types';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

 function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  if (!image) {
    return null;
  }

  const { urls, alt_description, user, likes } = image;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      ariaHideApp={false}
    >
      <img className={s.image} src={urls.regular} alt={alt_description || 'Image'} />
      <p>Author: {user.name}</p>
      <p>{likes} likes</p>
    </ReactModal>
  );
}

export default ImageModal;