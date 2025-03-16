import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import LogoIcon from '../../ui/icons/LogoIcon/LogoIcon';

const Container = styled.section`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
`;

const Logo = styled.div`
  position: absolute;
  top: 68px;
  left: 60px;
`;

const Side = styled.div`
  height: 100%;
`;

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
      <Logo>
        <LogoIcon />
      </Logo>
      {children.map((node) => (
        <Side>{node}</Side>
      ))}
    </Container>
  );
};
export default AuthenticationLayout;
