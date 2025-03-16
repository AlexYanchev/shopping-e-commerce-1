import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 0.3125rem;
`;

const InputContainer = styled.input<{ $marginBottom: number }>`
  width: 100%;
  border: 1px solid rgb(var(--main-color-dark));
  border-radius: 10px;
  padding: 16px;
  font-size: 1rem;
  font-weight: 400;

  ${({ $marginBottom }) => css`
    margin-bottom: ${$marginBottom}px;
  `}
`;

interface InputProps {
  type: 'text' | 'email' | 'password';
  name: string;
  textLabel?: string | undefined;
  marginBottom?: number | undefined;
}

const Input: FC<InputProps> = ({
  type,
  name,
  textLabel,
  marginBottom = 16,
}) => {
  return (
    <>
      {textLabel && <Label htmlFor={name}>{textLabel}</Label>}
      <InputContainer
        id={name}
        name={name}
        type={type}
        $marginBottom={marginBottom}
      />
    </>
  );
};

export default Input;
