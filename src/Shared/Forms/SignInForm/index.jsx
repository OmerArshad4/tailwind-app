import { Formik } from "formik";
import CustomBtn from "../../CustomBtn";
import InputField from "../../InputField";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_API_URL } from "../../../Utils/constant";
import { login } from "../../../Redux/features/Auth/authApi";
import { SIGNIN_INITIAL_VALUES } from "../../../Validations/InitialValues";
import { SIGNIN_VALIDATION_SCHEMA } from "../../../Validations/Validations";
import Images from "../../../HelperMethods/ImgConstants";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (values) => {
    const data = {
      apiEndpoint: LOGIN_API_URL,
      requestData: JSON.stringify(values),
    };

    dispatch(login(data)).then((res) => {
      if (res?.type === "login/fulfilled") {
        navigate("/admin/dashboard");
      }
    });
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 w-screen py-12 h-full">
        <div className="bg-white shadow-lg rounded-xl w-full md:w-1/2 lg:w-2/5 xl:w-1/3 p-8">
          <div className="text-center mb-6">
            {/* You can re-enable the logo here if needed */}
            {/* <img width={150} src={Images.LOGO_IMG} alt="Logo" className="mx-auto mb-2" /> */}
            <h3 className="text-2xl font-bold text-gray-800">
              Welcome Back, Admin
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Sign in to your admin control panel
            </p>
          </div>

          {/* Formik Form */}
          <Formik
            initialValues={SIGNIN_INITIAL_VALUES}
            validationSchema={SIGNIN_VALIDATION_SCHEMA}
            onSubmit={(values) => {
              handleLoginSubmit(values);
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
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <InputField
                    type="email"
                    name="email"
                    label={"Email"}
                    required={true}
                    value={values.email}
                    placeholder="Enter email"
                    onBlurHandle={handleBlur}
                    onChangeHandle={handleChange}
                    className="w-full p-2 border rounded"
                    icon={<HiOutlineEnvelope className="text-gray-600" />}
                    error={errors.email && touched.email ? errors.email : ""}
                  />
                </div>

                <div className="mb-4">
                  <InputField
                    type="password"
                    name="password"
                    required={true}
                    label={"Password"}
                    value={values.password}
                    placeholder="Enter password"
                    onBlurHandle={handleBlur}
                    onChangeHandle={handleChange}
                    className="w-full p-2 border rounded"
                    error={
                      errors.password && touched.password ? errors.password : ""
                    }
                  />
                </div>

                <CustomBtn
                  text="Sign In"
                  type="submit"
                  className="w-full bg-[#207883] hover:bg-[#186464] text-white py-3 rounded"
                />
                <div className="mb-6 text-center my-3">
                  <Link to="/forgotPassword">
                    <p className="text-base   text-black/60 font-bold">
                      Forgot password?
                    </p>
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
