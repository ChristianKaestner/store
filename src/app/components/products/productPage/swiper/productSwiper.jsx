import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './style.css';

export default function ProductSwiper({ product, windowWidth }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { images, title } = product;
  return (
    <>
      <Swiper
        loop={true}
        effect={'fade'}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade, Pagination]}
        pagination={{
          clickable: true,
        }}
        style={{ padding: 20, height: windowWidth > 900 ? '80%' : '400px' }}
        className="pagination"
      >
        {images &&
          images.map(image => {
            return (
              <SwiperSlide key={image}>
                <Image
                  src={image}
                  fill={true}
                  alt={title + ' image'}
                  sizes="100%"
                  priority="false"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      {windowWidth >= 900 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={10}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images &&
            images.map(image => {
              return (
                <SwiperSlide key={image}>
                  <Image
                    style={{
                      objectFit: 'contain',
                    }}
                    src={image}
                    width={50}
                    height={50}
                    alt={title + ' image'}
                    priority="false"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </>
  );
}
