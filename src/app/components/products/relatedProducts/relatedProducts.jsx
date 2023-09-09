import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, IconButton } from '@mui/material';
import ProductsItem from '../productsItem/productsItem';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useCart } from '@/app/hooks/useCart';
import { getSlideCount } from '@/app/utils/functions';
import 'swiper/css';

export default function RelatedProducts({ relatedProducts, windowWidth }) {
  const [prevBtn, setPervBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const { data, isLoading } = relatedProducts;
  const { cart } = useCart();
  const sliderRef = useRef();
  const slidesPerView = getSlideCount(windowWidth);

  const handlePrevCard = () => {
    if (sliderRef.current?.activeIndex - 1 === 0) {
      setPervBtn(false);
    }
    if (sliderRef.current?.activeIndex === data.length - slidesPerView) {
      setNextBtn(true);
    }
    sliderRef.current?.slidePrev();
  };

  const handleNextCard = () => {
    if (sliderRef.current?.activeIndex + 1 > 0) {
      setPervBtn(true);
    }
    if (sliderRef.current?.activeIndex + 1 === data.length - slidesPerView) {
      setNextBtn(false);
    }
    sliderRef.current?.slideNext();
  };

  const handleSlideChange = swiperCore => {
    const { activeIndex } = swiperCore;
    const length = data.length - slidesPerView;
    if (activeIndex === 0) {
      setPervBtn(false);
    }
    if (activeIndex > 0) {
      setPervBtn(true);
    }
    if (activeIndex === length) {
      setNextBtn(false);
    }
    if (activeIndex < length) {
      setNextBtn(true);
    }
  };

  return (
    <Box sx={{ width: '100%', height: 500, my: 4 }}>
      <Typography component="h5" sx={{ fontWeight: 500, fontSize: 32, pl: 2 }}>
        You may also be interested
      </Typography>
      {!isLoading && (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={16}
          wrapperTag="ul"
          onSwiper={it => (sliderRef.current = it)}
          style={{
            height: '100%',
            padding: '16px',
          }}
          onSlideChange={handleSlideChange}
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

          {data &&
            data.map(product => {
              const { id } = product;
              return (
                <SwiperSlide key={id} tag="li" style={{ width: 'auto' }}>
                  <ProductsItem product={product} cart={cart} />
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
      )}
    </Box>
  );
}
