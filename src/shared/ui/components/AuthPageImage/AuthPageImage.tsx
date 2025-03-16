import React, { FC } from 'react';
import Image from '../Image/Image';
import styled from 'styled-components';
import LogoIcon from '../../icons/LogoIcon/LogoIcon';

const Container = styled.div`
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  top: 68px;
  left: 60px;
`;

interface AuthPageImageProps {
  src: string;
}

const AuthPageImage: FC<AuthPageImageProps> = ({ src }) => {
  return (
    <Container>
      <Logo>
        <LogoIcon />
      </Logo>
      <Image
        alt="Базовая картинка на странице аутентификации"
        src={src}
        stylesImg={{
          width: 'auto',
          maxHeight: '100vh',
          objectFit: 'cover',
        }}
      />
    </Container>
  );
};

export default AuthPageImage;
