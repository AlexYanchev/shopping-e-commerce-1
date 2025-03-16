import React, { FC } from 'react';
import AuthenticationLayout from '../../shared/layouts/AuthenticationLayout/AuthenticationLayout';
import AuthPageImage from '../../shared/ui/components/AuthPageImage/AuthPageImage';
import Button from '../../shared/ui/components/Button/Button';
import Form from '../../shared/ui/components/Form/Form';
import Input from '../../shared/ui/components/Input/Input';
import ButtonBack from '../../shared/ui/components/ButtonBack/ButtonBack';
import styled from 'styled-components';

interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = () => {
  return (
    <AuthenticationLayout>
      <AuthPageImage src="/images/forgotPasswordPage.png" />

      <Form
        topChildren={<ButtonBack margin="0 0 30px 0" />}
        titleType="h1"
        titleText="Forgot Password"
        subtitleText="Enter your registered email address. we’ll send you a code to reset your password."
      >
        <Input textLabel="Email Address" name="email" type="email" />

        <Button type="submit" text="Send OTP" />
      </Form>
    </AuthenticationLayout>
  );
};

export default ForgotPassword;
