import React, { FC } from 'react';
import AuthenticationLayout from '../../../shared/layouts/AuthenticationLayout/AuthenticationLayout';
import AuthPageImage from '../../../shared/ui/components/AuthPageImage/AuthPageImage';
import styled from 'styled-components';

const AuthContainer = styled.div`
  height: 100%;

  & > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;
//padding: 0 50px 0;
interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <AuthenticationLayout>
      <AuthPageImage src="/images/loginPage.png" />
      <AuthContainer>
        <div>
          <h1>Welcome</h1>
          <p>Please login here</p>
          <form>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" />

            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />

            <input id="remember" name="password" type="checkbox" />

            <a href="/" title="Восстановление пароля">
              Forgot Password?
            </a>

            <button type="submit">Login</button>
          </form>
        </div>
      </AuthContainer>
    </AuthenticationLayout>
  );
};

export default LoginPage;
