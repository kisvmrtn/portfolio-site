import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
  }, []);

  const [image, setImage] = useState<number>(0);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <span
        className="absolute top-5 right-5 cursor-pointer text-white bg-black/50 rounded-full p-2"
        onClick={onClose}
      >
        <IoClose />
      </span>

      <img
        src={images[image]}
        alt=""
        className="
          max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-lg
          md:max-w-[60vw] md:max-h-[70vh]
        "
      />

      <div
        className="
          absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-6
          md:bottom-auto md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:flex md:justify-between md:px-4
        "
      >
        <span
          className="cursor-pointer text-white bg-black/50 rounded-full p-2 select-none"
          onClick={() => setImage(image <= 0 ? images.length - 1 : image - 1)}
        >
          <FaArrowLeft className="h-6 w-6" />
        </span>
        <span
          className="cursor-pointer text-white bg-black/50 rounded-full p-2 select-none"
          onClick={() => setImage(image >= images.length - 1 ? 0 : image + 1)}
        >
          <FaArrowRight className="h-6 w-6" />
        </span>
      </div>

      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="
              w-14 h-14 object-cover rounded-sm cursor-pointer border-2 border-transparent hover:border-white
              md:w-20 md:h-20
            "
            onClick={() => setImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
