import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
type ImageGalleryProps = {
  images: string[];
  onClose: () => void;
};
export default function ImageGallery({ images, onClose }: ImageGalleryProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  const [image, setImage] = useState<string>(images[0]);
  return (
    <>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <span
          className="absolute top-5 right-5 cursor-pointer text-white bg-black/50 rounded-full p-2"
          onClick={onClose}
        >
          <IoClose />
        </span>
        <img
          src={image}
          alt=""
          className="max-w-[60vw] max-h-[70vh] object-contain rounded-lg shadow-lg"
        />
        <div className="absolute bottom-1 flex">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-20 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-white"
              onClick={() => setImage(img)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
