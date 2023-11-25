import { useRef } from 'react';
import Image from 'next/image';
import { Box, Alert } from '@mui/material';
import { rotateImage, getAllFilesSize } from '@/app/lib/functions';
import { Container, Text, BtnStyled, IconUpload } from './uploadImage.styled';
import { InputStyled, ImagesBlock, IconClear } from './uploadImage.styled';
import { IconRotate, ImageContainer } from './uploadImage.styled';
import { RowBetween } from '../../lib/commonStyles';

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
    <Container errUpload={errUpload}>
      <RowBetween>
        <Box sx={{ mr: 2 }}>
          <Text>Add images</Text>
          <Text>
            Add up to 10 images in .jpg, .png formats, file size up to 5 MB
          </Text>
        </Box>

        <BtnStyled
          variant="contained"
          onClick={handlePick}
          type="button"
          startIcon={<IconUpload />}
        >
          Upload
        </BtnStyled>
        <InputStyled
          ref={imagePicker}
          type="file"
          name="images"
          onChange={e => {
            handleUpload(e);
          }}
          multiple
          accept="image/*,.png,.jpeg,"
        />
      </RowBetween>
      {errUpload && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Upload limit exceeded
        </Alert>
      )}
      {fileList.length > 0 && (
        <ImagesBlock component="ul">
          {fileList.map((image, index) => {
            return (
              <ImageContainer component="li" key={image.name + index}>
                <Image
                  src={URL.createObjectURL(image)}
                  alt="uploaded image"
                  width={80}
                  height={80}
                />
                <IconClear onClick={() => removeImage(image.name)} />
                <IconRotate onClick={() => handleRotateRight(image)} />
              </ImageContainer>
            );
          })}
        </ImagesBlock>
      )}
    </Container>
  );
}
