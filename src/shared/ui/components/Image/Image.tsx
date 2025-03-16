import React, { CSSProperties, FC } from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
  display: block;
`;

interface ImageProps {
  src: string;
  alt: string;
  stylesImg?: CSSProperties;
}

const Image: FC<ImageProps> = ({ src, alt, stylesImg }) => {
  return <Img alt={alt} src={src} style={stylesImg} />;
};

export default Image;
