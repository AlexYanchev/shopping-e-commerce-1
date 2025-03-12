import React, { FC } from 'react';
import styled from 'styled-components';
import LogoIcon from '../../ui/icons/LogoIcon/LogoIcon';

const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 845px auto;
`;

const Logo = styled.div`
  position: fixed;
  top: 68px;
  left: 60px;
`;

const AuthenticationLayout = () => {
  return (
    <Container>
      <Logo>
        <LogoIcon />
      </Logo>
    </Container>
  );
};
export default AuthenticationLayout;
