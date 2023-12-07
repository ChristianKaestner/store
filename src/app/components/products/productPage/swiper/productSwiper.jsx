'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import { SwiperContainer } from './swiper.styled';
import { PRODUCT_IMAGE_URL } from '@/app/lib/constants';
import './style.css';
import 'swiper/swiper-bundle.css';

export default function ProductSwiper({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliderRef = useRef(null);
  const { images, title } = product;

  useEffect(() => {
    const { swiper } = sliderRef.current;
    if (swiper && swiper.initialized && !swiper.destroyed) {
      setThumbsSwiper(sliderRef.current.swiper);
    }
  }, []);

  const handleSlideChange = swiper => {
    const slides = document.querySelectorAll('.swiper-slide-main');
    slides.forEach((slide, index) => {
      slide.style.opacity = index === swiper.activeIndex ? 1 : 0;
    });
  };

  return (
    <>
      <SwiperContainer>
        <Swiper
          effect={'fade'}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          pagination={{
            clickable: true,
          }}
          style={{
            height: '100%',
            borderRadius: 4,
          }}
          initialSlide={0}
          onSlideChange={handleSlideChange}
        >
          {images &&
            images.map((image, index) => {
              return (
                <SwiperSlide
                  key={image}
                  className="swiper-slide-main"
                  style={{
                    backgroundColor: 'transparent',
                    opacity: index === 0 ? 1 : 0,
                  }}
                >
                  <Image
                    src={PRODUCT_IMAGE_URL + image}
                    fill={true}
                    alt={title + ' image'}
                    sizes="100%"
                    priority="true"
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </SwiperContainer>
      <Swiper
        ref={sliderRef}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images &&
          images.map(image => {
            return (
              <SwiperSlide
                key={image}
                style={{ backgroundColor: 'transparent' }}
              >
                <Image
                  style={{
                    objectFit: 'contain',
                    cursor: 'pointer',
                  }}
                  src={PRODUCT_IMAGE_URL + image}
                  width={80}
                  height={80}
                  alt={title + ' image'}
                  priority="true"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
