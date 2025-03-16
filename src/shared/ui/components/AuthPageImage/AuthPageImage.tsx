import React, { FC } from 'react';
import Image from '../Image/Image';

interface AuthPageImageProps {
  src: string;
}

const AuthPageImage: FC<AuthPageImageProps> = ({ src }) => {
  return (
    <Image
      alt="Базовая картинка на странице аутентификации"
      src={src}
      stylesImg={{
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
      }}
    />
  );
};

export default AuthPageImage;
