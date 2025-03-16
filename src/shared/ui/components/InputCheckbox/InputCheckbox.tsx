import React, { FC } from 'react';
import styled from 'styled-components';
import CheckboxIcon from '../../icons/CheckboxIcon/CheckboxIcon';

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
`;

const CheckboxIconContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid rgb(var(--main-color-dark));
  border-radius: 5px;
  cursor: pointer;

  & > * {
    display: none;
  }
`;

const Input = styled.input`
  visibility: hidden;
  position: absolute;
  width: 1px;
  height: 1px;

  &:checked ~ ${CheckboxIconContainer} {
    border: none;
  }

  &:checked ~ ${CheckboxIconContainer} > * {
    display: block;
  }
`;

interface InputCheckboxProps {
  name: string;
  id?: string | undefined;
  textLabel?: string | undefined;
}

const InputCheckbox: FC<InputCheckboxProps> = ({ name, id, textLabel }) => {
  const inputId = id ? id : name;
  return (
    <Container>
      <Input type="checkbox" name={name} id={inputId} />
      <CheckboxIconContainer htmlFor={inputId}>
        <CheckboxIcon />
      </CheckboxIconContainer>
      {textLabel && <Label htmlFor={inputId}>{textLabel}</Label>}
    </Container>
  );
};

export default InputCheckbox;
