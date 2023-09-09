import Image from 'next/image';
import { Box, Divider, Paper, Typography, IconButton } from '@mui/material';
import { Tooltip, Rating } from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';

export default function ReviewItem({ review }) {
  const { text, pros, cons, images, rating, date, name } = review;
  return (
    <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>
          {name}
        </Typography>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Typography sx={{ color: 'primary.neutral', mr: 2 }}>
            {date}
          </Typography>
          <Tooltip title="Report">
            <IconButton sx={{ color: 'primary.hot' }}>
              <ReportIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Rating
          name="half-rating"
          precision={0.2}
          value={rating}
          readOnly
          sx={{ my: 2 }}
        />
        <Typography>{text}</Typography>
        <Typography sx={{ fontWeight: 500, mt: 1 }}>Strengths</Typography>
        <Typography>{pros}</Typography>
        <Typography sx={{ fontWeight: 500, mt: 1 }}>Weaknesses </Typography>
        <Typography>{cons}</Typography>
        {images.length && (
          <Box
            component="ul"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              listStyle: 'none',
              gap: 2,
              py: 2,
            }}
          >
            {images.map(image => {
              return (
                <Box
                  component="li"
                  key={image}
                  sx={{
                    position: 'relative',
                    width: 80,
                    height: 80,
                    borderColor: 'primary.light',
                    border: 1,
                    borderRadius: 1,
                  }}
                >
                  <Image
                    key={image}
                    src={image}
                    alt="Product photo from review"
                    fill={true}
                    sizes="90%"
                    priority="false"
                    style={{
                      borderRadius: 4,
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        )}

        <Box></Box>
      </Box>
    </Paper>
  );
}
