import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsItem from '../productsItem/productItem';
import { useCart } from '@/app/hooks/useCart';
import { getSlideCount } from '@/app/lib/functions';
import { IconBtnNavigate } from '@/app/lib/commonStyles';
import { Container, Text, IconNext, IconPrev } from './relatedProducts.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'swiper/css';

export default function RelatedProducts({ relatedProducts }) {
  const [prevBtn, setPervBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const { data, isLoading } = relatedProducts;
  const { cart } = useCart();
  const sliderRef = useRef();
  const mediaXS = useMediaQuery('(max-width:599px)');
  const mediaSM = useMediaQuery('(max-width:899px)');
  const mediaMD = useMediaQuery('(max-width:1199px)');
  const mediaLG = useMediaQuery('(min-width:1200px)');
  const slidesPerView = getSlideCount(mediaXS, mediaSM, mediaMD, mediaLG);

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
    <Container component="section">
      <Text component="h2">You may also be interested</Text>
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
            <IconBtnNavigate prev={0} onClick={handlePrevCard}>
              <IconPrev />
            </IconBtnNavigate>
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
            <IconBtnNavigate next={0} onClick={handleNextCard}>
              <IconNext />
            </IconBtnNavigate>
          )}
        </Swiper>
      )}
    </Container>
  );
}
