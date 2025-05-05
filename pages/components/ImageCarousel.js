import React, { useEffect } from 'react';

export default function ImageCarousel({ images, currentIndex, setIndex, autoPlay = true, interval = 2000 }) {
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, images.length, setIndex]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={`/images/${images[currentIndex]}`}
          alt={`Especial ${currentIndex + 1}`}
          style={{
            width: '100%',
            maxWidth: 400,
            height: 'auto',
            maxHeight: 340,
            borderRadius: 18,
            boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
            objectFit: 'cover',
            transition: 'all 0.5s',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
      <div
        style={{
          marginTop: 18,
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              width: 16,
              height: 16,
              borderRadius: '50%',
              background: idx === currentIndex ? '#39ff14' : '#444',
              transition: 'background 0.3s',
              cursor: 'pointer',
              marginBottom: 4,
            }}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .carousel-img {
            max-width: 98vw !important;
            max-height: 40vh !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
