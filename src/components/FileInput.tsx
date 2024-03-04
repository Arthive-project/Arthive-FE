// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const imgPreview = css`
  width: 200px;
`;

function FileInput({ name, value, onChange, imgRef }) {
  const [imgFile, setImgFile] = useState('');

  const saveImgFile = () => {
    if (imgRef.current) {
      const file = imgRef.current.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImgFile(reader.result);
          onChange({ target: { name, value: reader.result } });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  useEffect(() => {
    setImgFile(
      value || `${process.env.PUBLIC_URL}/assets/register-preview.png`
    );
  }, [value]);

  return (
    <tr>
      <th>이미지</th>
      <td>
        <img
          src={
            imgFile
              ? imgFile
              : `${process.env.PUBLIC_URL}/assets/register-preview.png`
          }
          alt='이미지 미리보기'
          css={imgPreview}
        />
        <input
          type='file'
          accept='image/*'
          name={name}
          onChange={saveImgFile}
          ref={imgRef}
        />
      </td>
    </tr>
  );
}

export default FileInput;
