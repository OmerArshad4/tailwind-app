import { Formik, Form } from "formik";
import OtpInput from "react-otp-input";
import CustomBtn from "../../CustomBtn";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmailOtp } from "../../../Redux/features/Auth/authApi";
import { VERIFY_OTP_INITIAL_VALUES } from "../../../Validations/InitialValues";
import { VERIFY_OTP_VALIDATION_SCHEMA } from "../../../Validations/Validations";
import { VERIFY_OTP_API_URL } from "../../../Utils/constant";

const OtpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(10);
  const [userEmail, setUserEmail] = useState(10);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  // useEffect(() => {
  //   !location?.state?.email && navigate("/");
  // }, []);

  // useEffect(() => {
  //   if (timeLeft > 0) {
  //     const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  //     return () => clearTimeout(timer);
  //   } else {
  //     setIsResendDisabled(false);
  //   }
  // }, [timeLeft]);

  const handleSubmit = (values) => {
    navigate("/setNewPassword");
    const data = {
      apiEndpoint: VERIFY_OTP_API_URL,
      requestData: JSON.stringify(values),
    };

    // dispatch(verifyEmailOtp(data)).then((res) => {
    //   if (res.type === "verifyEmailOtp/fulfilled") {
    //     navigate("/setNewPassword", {
    //       state: { email: location?.state?.email },
    //     });
    //   }
    // });
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 w-screen py-12 h-full">
        <div className="bg-white shadow-lg rounded-xl w-full md:w-[630px] p-8">
          <div className="text-center mb-6">
            {/* <img width={150} src={Images.LOGO_IMG} alt="Logo" className="mx-auto mb-2" /> */}
            <h3 className="font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[32px] leading-[40px] text-black text-center">
              Verification
            </h3>
          </div>

          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              ...VERIFY_OTP_INITIAL_VALUES,
              email: location?.state?.email,
            }}
            // validationSchema={VERIFY_OTP_VALIDATION_SCHEMA}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <div className="mb-4 ">
                 
                  <h3 className="font-dm-sans font-normal text-[20px] leading-[24px] text-black text-center my-3">
                    Enter the code that you received on your email
                    fgh*****@gmail.com
                  </h3>
                  <label className="text-black  font-normal my-1">
                    Verification Code
                  </label>
                  <OtpInput
                    value={values.token}
                    numInputs={6}
                    onChange={(token) =>
                      handleChange({
                        target: { name: "token", value: token },
                      })
                    }
                    containerStyle="flex flex-wrap gap-1"
                    renderInput={(props) => (
                      <input
                        {...props}
                        name="token"
                        onBlur={handleBlur}
                        style={{
                          width: "91px",
                          height: "40px",
                        }}
                        className="rounded-lg gap-5   text-center text-xl text-black border border-gray-300 transition-all text-black/30 hover:ring-[#207883] hover:ring-opacity-30 focus:outline-none focus:border-[#207883] focus:ring-[#207883] focus:ring-2 focus:ring-opacity-30"
                      />
                    )}
                  />
                  {errors.token && touched.token && (
                    <p className="text-sm text-red-500">{errors.token}</p>
                  )}
                </div>

                {/* <div className="flex justify-end items-center mb-4">
                  <button
                    type="button"
                    // onClick={handleResendOtp}
                    className={`text-sm font-bold ${
                      isResendDisabled
                        ? "text-gray-400"
                        : "text-base   text-black/60 font-bold"
                    }`}
                    disabled={isResendDisabled}
                  >
                    {isResendDisabled
                      ? `Resend OTP in ${timeLeft}s`
                      : "Resend OTP"}
                  </button>
                </div> */}
                <CustomBtn
                  text="Send Code"
                  type="submit"
                  className="py-3 px-6  w-full"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default OtpForm;
