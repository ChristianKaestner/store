import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { RateContainer, RateIconBtn, Text } from './rateReview.styled';
import { RowCenter } from '@/app/lib/commonStyles';

export default function RateReview({ usefulness }) {
  const { pros, cons } = usefulness;
  return (
    <RateContainer component="ul">
      <RowCenter component="li">
        <RateIconBtn>
          <ThumbUpOffAltIcon />
        </RateIconBtn>
        <Text>{pros}</Text>
      </RowCenter>
      <RowCenter component="li">
        <RateIconBtn>
          <ThumbDownOffAltIcon />
        </RateIconBtn>
        <Text>{cons}</Text>
      </RowCenter>
    </RateContainer>
  );
}
