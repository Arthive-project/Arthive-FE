// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState, ChangeEvent, RefObject } from 'react';

interface FileInputProps {
  name: string;
  value: string;
  onChange: (event: {
    target: { name: string; value: string | ArrayBuffer | null };
  }) => void;
  imgRef: RefObject<HTMLInputElement>;
}

function FileInput({ name, value, onChange, imgRef }: FileInputProps) {
  const [imgFile, setImgFile] = useState('');

  const saveImgFile = () => {
    if (
      imgRef.current &&
      imgRef.current.files &&
      imgRef.current.files.length > 0
    ) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgFile(reader.result as string);
        onChange({ target: { name, value: reader.result as string } });
      };
      reader.readAsDataURL(file);
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
          // css={imgPreview}
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

const imgPreview = css`
  width: 200px;
`;
