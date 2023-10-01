import { useRef } from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Alert, Grow } from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';
import ClearIcon from '@mui/icons-material/Clear';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { rotateImage, getAllFilesSize } from '@/app/lib/functions';

export default function UploadImage({
  fileList,
  errUpload,
  setFileList,
  setErrUpload,
}) {
  const imagePicker = useRef(null);

  const handlePick = () => {
    imagePicker.current.click();
  };

  const handleUpload = e => {
    const files = e.target.files;
    const uploadedSize = getAllFilesSize(files);
    const maxSize = 5 * 1024 * 1024;
    if (files.length > 10 || uploadedSize > maxSize) {
      setErrUpload(true);
      return;
    }
    setErrUpload(false);
    Object.values(files).forEach(file => setFileList(prev => [...prev, file]));
    const stateSize = getAllFilesSize(fileList);
    if (fileList.length > 10 || stateSize > maxSize) {
      setErrUpload(true);
      return;
    }
  };

  const removeImage = image => {
    setFileList(fileList.filter(n => n.name !== image));
  };

  const handleRotateRight = image => {
    rotateImage(image)
      .then(rotatedImage => {
        setFileList(
          fileList.map(n => {
            if (n.name === image.name) return rotatedImage;
            return n;
          })
        );
      })
      .catch(error => {
        console.error('rotate error', error);
      });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderRadius: 1,
        borderColor: errUpload ? 'primary.hot' : 'primary.dim',
        p: 2,
        mt: 4,
        '&:hover': {
          borderColor: errUpload ? 'primary.hot' : 'primary.light',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ mr: 2 }}>
          <Typography sx={{ fontWeight: 500, color: 'primary.dim' }}>
            Add images
          </Typography>
          <Typography sx={{ color: 'primary.neutral' }}>
            Add up to 10 images in .jpg, .png formats, file size up to 5 MB
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={handlePick}
          type="button"
          startIcon={<CollectionsIcon sx={{ fontSize: 40 }} />}
          sx={{ minWidth: 120, height: 40, bgcolor: 'primary.light' }}
        >
          Upload
        </Button>
        <input
          ref={imagePicker}
          type="file"
          name="images"
          onChange={e => {
            handleUpload(e);
          }}
          multiple
          accept="image/*,.png,.jpeg,"
          style={{
            opacity: 0,
            width: 0,
            height: 0,
            lineHeight: 0,
            overflow: 'hidden',
            margin: 0,
            padding: 0,
          }}
        />
      </Box>
      {errUpload && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Upload limit exceeded
        </Alert>
      )}
      {fileList.length > 0 && (
        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 2,
            listStyle: 'none',
            mt: 2,
          }}
        >
          {fileList.map((image, index) => {
            return (
              <Box
                component="li"
                key={image.name + index}
                sx={{ position: 'relative', pb: 2 }}
              >
                <Image
                  src={URL.createObjectURL(image)}
                  alt="uploaded image"
                  width={80}
                  height={80}
                />
                <ClearIcon
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    fontSize: '1.25rem',
                    color: 'primary.neutral',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.accent',
                    },
                  }}
                  onClick={() => removeImage(image.name)}
                />

                <RotateRightIcon
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    fontSize: '1.25rem',
                    color: 'primary.neutral',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.accent',
                    },
                  }}
                  onClick={() => handleRotateRight(image)}
                />
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
