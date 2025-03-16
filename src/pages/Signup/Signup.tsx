import React, { FC } from 'react';
import AuthenticationLayout from '../../shared/layouts/AuthenticationLayout/AuthenticationLayout';
import AuthPageImage from '../../shared/ui/components/AuthPageImage/AuthPageImage';
import Button from '../../shared/ui/components/Button/Button';
import Form from '../../shared/ui/components/Form/Form';
import Input from '../../shared/ui/components/Input/Input';
import InputCheckbox from '../../shared/ui/components/InputCheckbox/InputCheckbox';

interface SignupPageProps {}

const SignupPage: FC<SignupPageProps> = () => {
  return (
    <AuthenticationLayout>
      <AuthPageImage src="/images/signupPage.png" />
      <Form
        titleType="h1"
        titleText="Create New Account"
        subtitleText="Please enter details"
      >
        <Input textLabel="First Name" name="firstName" type="text" />

        <Input textLabel="Last Name" name="lastName" type="text" />

        <Input textLabel="Email Address" name="email" type="email" />

        <Input textLabel="Password" name="password" type="password" />

        <InputCheckbox
          name="agreeTerms"
          textLabel={
            <>
              I agree to the{' '}
              <span style={{ fontWeight: 700 }}>Terms & Conditions</span>
            </>
          }
        />

        <Button type="submit" text="Signup" />
      </Form>
    </AuthenticationLayout>
  );
};

export default SignupPage;
