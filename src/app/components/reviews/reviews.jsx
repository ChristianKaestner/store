'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { getProductReviews } from '@/app/redux/reviews/operations';
import { addProductReview } from '@/app/redux/reviews/operations';
import { useReviews } from '@/app/hooks/useReviews';
import { useAuth } from '@/app/hooks/useAuth';
import { useModal } from '@/app/hooks/useModal';
import { toggleAccount, toggleSuccess } from '@/app/redux/modal/slice';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import ReviewTitle from '@/app/components/reviews/title/title';
import SideBar from './sideBar/sideBar';
import AddReview from './addReview/addReview';
import Modal from '../modal/modal';
import SuccessModal from '../modal/successModal/successModal';
import AddReviewModal from '../modal/addReview/addReviewModal';
import ReviewList from './reviewsList/reviewList';
import ProductRating from '../products/productsItem/rating/rating';
import ProductCode from '../products/productsItem/productCode/productCode';
import { HeadBlock, ReviewBlock, MainBlock } from './reviews.styled';
import { NoReviewBlock } from './reviews.styled';
import { productWithCat } from '../../lib/functions';
import Loader from '@/app/components/loading/loaderBackdrop';

export default function Reviews() {
  const [reviewModal, setReviewModal] = useState(false);
  const [resLoading, setResLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLogin } = useAuth();
  const { successModal } = useModal();
  const { reviews, product, isLoading } = useReviews();
  const { slug } = useParams();

  const updatedProduct = productWithCat(product);

  useEffect(() => {
    dispatch(getProductReviews(slug));
  }, [dispatch, slug]);

  const handleWirteReview = () => {
    isLogin ? setReviewModal(true) : dispatch(toggleAccount(true));
  };

  const handleAddReview = async formData => {
    setResLoading(true);
    const response = await dispatch(addProductReview(formData));
    if (response.meta.requestStatus === 'fulfilled') {
      setReviewModal(false);
      dispatch(toggleSuccess(true));
    }
    setResLoading(false);
  };

  return (
    <>
      {product && (
        <>
          <Breadcrumbs product={product} />
          <ReviewTitle title={product.title} />
          <HeadBlock>
            <ProductRating product={updatedProduct} isCard={false} />
            <ProductCode id={product.id} />
          </HeadBlock>
          <MainBlock>
            <ReviewBlock component="section">
              <AddReview onWriteReview={handleWirteReview} />
              {reviews.length > 0 ? (
                <ReviewList reviews={reviews} />
              ) : (
                <NoReviewBlock>
                  <Image
                    src="/noReview.png"
                    alt="not found image"
                    fill={true}
                    sizes="100%"
                    style={{ objectFit: 'contain' }}
                    priority={true}
                  />
                </NoReviewBlock>
              )}
            </ReviewBlock>
            <SideBar
              image={product.images[0]}
              title={product.title}
              price={product.price}
              category={updatedProduct.category}
              id={product.id}
            />
            {reviewModal && (
              <Modal
                open={reviewModal}
                close={() => setReviewModal(false)}
                title="Add review"
                width="600px"
                height="600px"
                position="center"
              >
                <AddReviewModal
                  id={product.id}
                  handleAddReview={handleAddReview}
                />
              </Modal>
            )}
            {successModal && (
              <Modal
                open={successModal}
                close={() => dispatch(toggleSuccess(false))}
                title="Successfully"
                width="600px"
                height="auto"
                position="center"
              >
                <SuccessModal
                  text={
                    'Your review has been successfully added! You can manage your reviews in your personal account.'
                  }
                />
              </Modal>
            )}
          </MainBlock>
        </>
      )}
      <Loader isLoading={isLoading || resLoading} />
    </>
  );
}
