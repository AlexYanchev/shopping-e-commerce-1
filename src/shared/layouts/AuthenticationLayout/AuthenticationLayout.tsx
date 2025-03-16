import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: min-content auto;
  height: 100vh;
`;

const Side = styled.div``;

interface AuthenticationLayoutProps {
  children: [ReactNode, ReactNode];
}

const AuthenticationLayout: FC<AuthenticationLayoutProps> = ({ children }) => {
  const totalCount = 2;
  const childrenCount = React.Children.count(children);

  if (childrenCount !== totalCount) {
    throw new Error(
      `Компонент AuthenticationLayout может принимать только ${totalCount} дочерних узлов. А было передано ${childrenCount}`
    );
  }
  return (
    <Container>
      {children.map((node, index) => (
        <Side key={index}>{node}</Side>
      ))}
    </Container>
  );
};
export default AuthenticationLayout;
