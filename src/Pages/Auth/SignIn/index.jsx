import AuthWrapper from "../../../Shared/AuthWrapper";
import SignInForm from "../../../Shared/Forms/SignInForm";

const SignUp = () => {
  return (
    <div>
      <AuthWrapper AuthForm={SignInForm} headingText="Let’s Get Started!" />
    </div>
  );
};

export default SignUp;
