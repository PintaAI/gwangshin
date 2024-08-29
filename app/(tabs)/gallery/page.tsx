// app/(tabs)/gallery/page.tsx
import React from 'react';
import Image from 'next/image';
// Add all image paths you want to include

const images = [
  "/images/rebar_splice_coupler.png",
  "/image/certificate1.png",
  "/image/certificate2.png",
  "/image/certificate3.png",
  "/images/quality_test_setup.png",
];

const GalleryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold">Gallery</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
      </div>

    </div>
  );
};

export default GalleryPage;
