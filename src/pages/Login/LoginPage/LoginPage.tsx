import React, { FC } from 'react';
import AuthenticationLayout from '../../../shared/layouts/AuthenticationLayout/AuthenticationLayout';
import AuthPageImage from '../../../shared/ui/components/AuthPageImage/AuthPageImage';
import styled from 'styled-components';
import Form from '../../../shared/ui/components/Form/Form';
import Input from '../../../shared/ui/components/Input/Input';
import InputCheckbox from '../../../shared/ui/components/InputCheckbox/InputCheckbox';
import Button from '../../../shared/ui/components/Button/Button';

const AuthContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px 0;
`;

const InputCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.875rem;
`;

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <AuthenticationLayout>
      <AuthPageImage src="/images/loginPage.png" />
      <AuthContainer>
        <Form
          titleType="h1"
          titleText="Welcome"
          subtitleText="Please login here"
        >
          <Input textLabel="Email Address" name="email" type="email" />

          <Input textLabel="Password" name="password" type="password" />

          <InputCheckboxContainer>
            <InputCheckbox name="rememberMe" textLabel="Remember Me" />
            <a href="/" title="Восстановление пароля">
              Forgot Password?
            </a>
          </InputCheckboxContainer>

          <Button type="submit" text="Login" />
        </Form>
      </AuthContainer>
    </AuthenticationLayout>
  );
};

export default LoginPage;
