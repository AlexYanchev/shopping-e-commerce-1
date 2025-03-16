import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.button<{ $maxWidth?: number | undefined }>`
  width: 100%;
  border-radius: 10px;
  background: rgb(var(--main-color-dark));
  padding: 17px;
  color: #fff
    ${({ $maxWidth }) =>
      $maxWidth &&
      css`
        max-width: ${$maxWidth};
      `};
`;

interface ButtonProps {
  text: string;
  type: 'submit' | 'button';
  widthPx?: number | undefined;
}

const Button: FC<ButtonProps> = ({ type, widthPx, text }) => {
  return (
    <ButtonContainer type={type} $maxWidth={widthPx}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
