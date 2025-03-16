import React, { FC, JSX, ReactElement, ReactNode, useMemo } from 'react';
import styled, { StyledInstance } from 'styled-components';

type T_TitleType = 'h1' | 'h2' | 'h3' | 'h4';

const Subtitle = styled.p`
  font-size: 1rem;
  color: rgb(var(--main-color-grey));
  margin-bottom: 1.875rem;
`;

const titleStyles = `
    font-weight: 700;
    font-size: 1.875rem;
    margin-bottom: 0.3135rem;
    `;

const titleTags: Record<
  T_TitleType,
  React.ComponentType<React.HTMLProps<HTMLHeadingElement>>
> = {
  h1: styled.h1`
    ${titleStyles}
  `,
  h2: styled.h2`
    ${titleStyles}
  `,
  h3: styled.h3`
    ${titleStyles}
  `,
  h4: styled.h4`
    ${titleStyles}
  `,
};

interface FormProps {
  titleType: T_TitleType;
  titleText: string;
  subtitleText?: string | undefined;
  children: ReactNode;
}

const Form: FC<FormProps> = ({
  titleType,
  titleText,
  subtitleText,
  children,
}) => {
  const Title = titleTags[titleType];
  return (
    <>
      <Title>{titleText}</Title>
      {subtitleText && <Subtitle>{subtitleText}</Subtitle>}
      <form>{children}</form>
    </>
  );
};

export default Form;
