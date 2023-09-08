import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Box, Typography, IconButton } from '@mui/material';
import ProductsItem from '../productsItem/productsItem';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useCart } from '@/app/hooks/useCart';
import 'swiper/css';
import 'swiper/css/pagination';

export default function RelatedProducts({ relatedProducts }) {
  const [prevBtn, setPervBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const { data, isLoading } = relatedProducts;
  const { cart } = useCart();
  const sliderRef = useRef();

  const handlePrevCard = () => {
    if (sliderRef.current?.activeIndex === 0) {
      setPervBtn(false);
    }
    if (sliderRef.current?.activeIndex < data.length - 6) {
      setNextBtn(true);
    }
    sliderRef.current?.slidePrev();
  };

  const handleNextCard = () => {
    console.log(data.length);
    if (sliderRef.current?.activeIndex > 0) {
      setPervBtn(true);
    }
    if (sliderRef.current?.activeIndex >= data.length - 6) {
      setNextBtn(false);
    }
    console.log(sliderRef);
    sliderRef.current?.slideNext();
  };

  return (
    <Box sx={{ width: '100%', height: 500, my: 4 }}>
      <Typography component="h5" sx={{ fontWeight: 500, fontSize: 32, pl: 4 }}>
        You may also be interested
      </Typography>
      {!isLoading && (
        <Swiper
          slidesPerView={6}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          onSwiper={it => (sliderRef.current = it)}
          modules={[Pagination]}
          style={{
            height: '100%',
            padding: '32px',
          }}
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
                <SwiperSlide key={id}>
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
