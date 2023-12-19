import { useState, useRef, useEffect } from 'react';
import { useGetRelatedProductsQuery } from '@/app/redux/services/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsItem from '../productsItem/productItem';
import { useCart } from '@/app/hooks/useCart';
import { getSlideCount } from '@/app/lib/functions';
import { Container, Text } from './relatedProducts.styled';
import { NavigateNext, NavigatePrev } from '../../navigateBtn/navigateBtn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { defineCategory } from '@/app/lib/functions';
import 'swiper/css';

export default function RelatedProducts({ id }) {
  const [prevBtn, setPrevBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(false);
  const { data = [], isLoading } = useGetRelatedProductsQuery(id);
  const { cart } = useCart();
  const sliderRef = useRef();
  const mediaXS = useMediaQuery('(max-width:319px)');
  const mediaS = useMediaQuery('(max-width:599px)');
  const mediaSM = useMediaQuery('(max-width:899px)');
  const mediaMD = useMediaQuery('(max-width:1199px)');
  const mediaLG = useMediaQuery('(min-width:1200px)');
  const slidesPerView = getSlideCount(
    mediaXS,
    mediaS,
    mediaSM,
    mediaMD,
    mediaLG
  );

  useEffect(() => {
    if (data.length > slidesPerView) {
      setNextBtn(true);
    }
  }, [data, slidesPerView]);

  const handlePrevCard = () => {
    if (sliderRef.current?.activeIndex - 1 === 0) {
      setPrevBtn(false);
    }
    if (sliderRef.current?.activeIndex === data.length - slidesPerView) {
      setNextBtn(true);
    }
    sliderRef.current?.slidePrev();
  };

  const handleNextCard = () => {
    if (sliderRef.current?.activeIndex + 1 > 0) {
      setPrevBtn(true);
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
      setPrevBtn(false);
    }
    if (activeIndex > 0) {
      setPrevBtn(true);
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
      {data.length > 0 && (
        <>
          <Text component="h2">You may also be interested</Text>
          {!isLoading && (
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={16}
              wrapperTag="ul"
              onSwiper={it => (sliderRef.current = it)}
              style={{ height: '100%' }}
              onSlideChange={handleSlideChange}
            >
              {prevBtn && <NavigatePrev prev={handlePrevCard} />}

              {data &&
                data.map(product => {
                  const category = defineCategory(product);
                  const productWithCats = { ...product, category };
                  const { id } = product;
                  return (
                    <SwiperSlide
                      key={id}
                      tag="li"
                      style={{ width: 'auto', backgroundColor: 'transparent' }}
                    >
                      <ProductsItem
                        product={productWithCats}
                        cart={cart}
                        width={'100%'}
                        component="div"
                        mb={0}
                      />
                    </SwiperSlide>
                  );
                })}

              {nextBtn && <NavigateNext next={handleNextCard} />}
            </Swiper>
          )}
        </>
      )}
    </Container>
  );
}
