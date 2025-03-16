import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import ArrowIcon from '../../icons/ArrowIcon/ArrowIcon';

const Button = styled.button<{ $margin?: string | undefined }>`
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 13px;
  background: unset;
  font-family: inherit;
  cursor: pointer;

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `};
`;

interface ButtonBackProps {
  margin?: string | undefined;
}

const ButtonBack: FC<ButtonBackProps> = ({ margin }) => {
  return (
    <Button $margin={margin}>
      <ArrowIcon />
      <span>Back</span>
    </Button>
  );
};

export default ButtonBack;
