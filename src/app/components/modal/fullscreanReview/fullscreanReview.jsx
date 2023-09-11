import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import 'swiper/css';

export default function FullscreanImage({ dto }) {
  const [prevBtn, setPervBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const { images, picked } = dto;
  const startPos = images.findIndex(image => image === picked);
  const sliderRef = useRef();

  useEffect(() => {
    if (startPos === images.length - 1) {
      setNextBtn(false);
      setPervBtn(true);
    }
  }, [startPos, images]);

  const handlePrevCard = () => {
    if (sliderRef.current?.activeIndex - 1 === 0) {
      setPervBtn(false);
    }
    if (sliderRef.current?.activeIndex === images.length - 1) {
      setNextBtn(true);
    }
    sliderRef.current?.slidePrev();
  };

  const handleNextCard = () => {
    if (sliderRef.current?.activeIndex + 1 > 0) {
      setPervBtn(true);
    }
    if (sliderRef.current?.activeIndex + 1 === images.length - 1) {
      setNextBtn(false);
    }
    sliderRef.current?.slideNext();
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      wrapperTag="ul"
      onSwiper={it => (sliderRef.current = it)}
      style={{
        height: '100%',
        width: '100%',
      }}
      initialSlide={startPos}
    >
      {prevBtn && (
        <IconButton
          sx={{
            position: 'absolute',
            top: 'calc(50% - 25px)',
            left: 0,
            width: 50,
            height: 50,
            color: 'primary.light',
            bgcolor: 'primary.dim',
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={handlePrevCard}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}

      {images.map(image => {
        return (
          <SwiperSlide key={image} tag="li" style={{ width: 'auto' }}>
            <Image
              style={{
                objectFit: 'contain',
              }}
              src={image}
              fill={true}
              alt="review image"
              sizes="100%"
              priority="false"
            />
          </SwiperSlide>
        );
      })}

      {nextBtn && (
        <IconButton
          sx={{
            position: 'absolute',
            top: 'calc(50% - 25px)',
            right: 0,
            width: 50,
            height: 50,
            color: 'primary.light',
            bgcolor: 'primary.dim',
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={handleNextCard}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    </Swiper>
  );
}
