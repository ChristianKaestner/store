import ReplyIcon from '@mui/icons-material/Reply';
import { RowCenter } from '@/app/lib/commonStyles';
import { ReplyBtn } from './replyReview.styled';

export default function ReplyReview({ onReplyClick }) {
  return (
    <RowCenter>
      <ReplyBtn
        startIcon={<ReplyIcon sx={{ transform: 'rotate(180deg)' }} />}
        onClick={onReplyClick}
      >
        Reply to review
      </ReplyBtn>
    </RowCenter>
  );
}
