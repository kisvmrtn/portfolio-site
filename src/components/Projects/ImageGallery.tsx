import { IoClose } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
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

  const [image, setImage] = useState<number>(0);
  return (
    <>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <span
          className="absolute top-5 right-5 cursor-pointer text-white bg-black/50 rounded-full p-2"
          onClick={onClose}
        >
          <IoClose />
        </span>
        <span
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/50 rounded-full p-2 select-none"
          onClick={() => setImage(image <= 0 ? images.length - 1 : image - 1)}
        >
          <FaArrowLeft className="h-5 w-5" />
        </span>

        <img
          src={images[image]}
          alt=""
          className="max-w-[60vw] max-h-[70vh] object-contain rounded-lg shadow-lg"
        />
        <span
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/50 rounded-full p-2 select-none"
          onClick={() => setImage(image >= images.length - 1 ? 0 : image + 1)}
        >
          <FaArrowRight className="h-5 w-5" />
        </span>
        <div className="absolute bottom-1 flex">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-20 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-white"
              onClick={() => setImage(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
