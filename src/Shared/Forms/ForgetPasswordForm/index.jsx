import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomBtn from "../../../Shared/CustomBtn";
import { HiOutlineEnvelope } from "react-icons/hi2";
import InputField from "../../../Shared/InputField";
import { FORGET_PASSWORD_API_URL } from "../../../Utils/constant";
import { forgotPassword } from "../../../Redux/features/Auth/authApi";
import { FORGOT_PASSWORD_SCHEMA } from "../../../Validations/Validations";
import { FORGOT_PASSWORD_INITIAL_VALUES } from "../../../Validations/InitialValues";

const ForgotPasswordForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
  navigate("/verifyOtp");
    const data = {
      apiEndpoint: FORGET_PASSWORD_API_URL,
      requestData: JSON.stringify(values),
    };
  
    // dispatch(forgotPassword(data)).then((res) => {
    //      navigate("/verifyOtp", { state: { email: values?.email } });
    //   if (res.type === "forgotPassword/fulfilled") {
    //     console.log(res?.payload?.data);
    //     navigate("/verifyOtp", { state: { email: values?.email } });
    //   }
    // });
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 w-screen py-12 h-full">
        <div className="bg-white shadow-lg rounded-xl w-full md:w-1/2 lg:w-2/5 xl:w-1/3 p-8">
          <div className="text-center mb-6">
            {/* <img width={150} src={Images.LOGO_IMG} alt="Logo" className="mx-auto mb-2" /> */}
            <h3 className="font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[32px] leading-[40px] text-black text-center">
              Forgot Password
            </h3>
          </div>
          <h3 className="font-dm-sans font-normal text-[20px] leading-[24px] text-black text-center my-2">
            Enter the email for verification code
          </h3>
          <div className="w-full">
            <Formik
              validationSchema={FORGOT_PASSWORD_SCHEMA}
              initialValues={FORGOT_PASSWORD_INITIAL_VALUES}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="">
                  <div className="mb-3">
                    <InputField
                      type="email"
                      name="email"
                      label={"Email"}
                      required={true}
                      value={values.email}
                      placeholder="Enter email"
                      onBlurHandle={handleBlur}
                      onChangeHandle={handleChange}
                      className="w-full mb-0 p-2 border rounded"
                      icon={<HiOutlineEnvelope className="text-gray-600" />}
                      error={errors.email && touched.email ? errors.email : ""}
                    />
                  </div>

                  <div className="mt-6">
                    <CustomBtn
                      text="Get Code"
                      type={"submit"}
                      className="w-full mb-2 py-3 text-white"
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
