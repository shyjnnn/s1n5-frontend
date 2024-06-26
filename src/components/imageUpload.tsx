import React from 'react';
import styled from 'styled-components';

import uploadImage from '@/api/imageRequest';

import ContentTitle from './common/ContentTitle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 84px;
  padding: 10px 0;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 84px;
  height: 84px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const StyledButton = styled.div`
  display: flex;
  width: 84px;
  height: 84px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background: var(--warm-gray-1, #e5e3df);
  color: var(--brown-1, #555151);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 10px;
`;

const ImageIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const DeleteImgIcon = styled.img`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

interface Props {
  imgUrl: string | null;
  setImgUrl: (value: string | null) => void;
}

function ImageUpload(props: Props) {
  const { imgUrl, setImgUrl } = props;
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const result = await uploadImage(file);

      if (result instanceof Error) {
        /* empty */
      } else {
        setImgUrl(result);
      }
    }
  };

  const handleDeleteImage = () => {
    setImgUrl(null);
  };

  return (
    <Container>
      <ContentTitle text="사진 및 동영상 첨부" hiddenPoint />
      <Wrapper>
        {!imgUrl && (
          <InputWrapper>
            <Input type="file" accept="image/png" onChange={handleFileChange} />
            <StyledButton>
              <ImageIcon src="./svg/attatch.svg" alt="Upload Icon" />
              첨부하기
            </StyledButton>
          </InputWrapper>
        )}

        {imgUrl && (
          <ImagePreviewWrapper>
            <ImagePreview src={imgUrl} alt="Uploaded" />
            <DeleteImgIcon
              src="./svg/delete-icon.svg"
              alt="Delete Icon"
              onClick={handleDeleteImage}
            />
          </ImagePreviewWrapper>
        )}
      </Wrapper>
    </Container>
  );
}

export default ImageUpload;
