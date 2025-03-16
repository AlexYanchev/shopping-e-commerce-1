import React, { FC } from 'react';
import AuthenticationLayout from '../../../shared/layouts/AuthenticationLayout/AuthenticationLayout';
import AuthPageImage from '../../../shared/ui/components/AuthPageImage/AuthPageImage';
import Form from '../../../shared/ui/components/Form/Form';
import Input from '../../../shared/ui/components/Input/Input';
import InputCheckbox from '../../../shared/ui/components/InputCheckbox/InputCheckbox';
import Button from '../../../shared/ui/components/Button/Button';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <AuthenticationLayout>
      <AuthPageImage src="/images/loginPage.png" />
      <Form titleType="h1" titleText="Welcome" subtitleText="Please login here">
        <Input textLabel="Email Address" name="email" type="email" />

        <Input textLabel="Password" name="password" type="password" />

        <InputCheckbox name="rememberMe" textLabel="Remember Me">
          <a href="/" title="Восстановление пароля">
            Forgot Password?
          </a>
        </InputCheckbox>

        <Button type="submit" text="Login" />
      </Form>
    </AuthenticationLayout>
  );
};

export default LoginPage;
