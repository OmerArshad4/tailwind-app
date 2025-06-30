import { Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomBtn from "../../../Shared/CustomBtn";
import InputField from "../../../Shared/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import { SET_PASSWORD_API_URL } from "../../../Utils/constant";
import { setNewPassword } from "../../../Redux/features/Auth/authApi";
import { NEW_PASSWORD_INITIAL_VALUES } from "../../../Validations/InitialValues";
import { NEW_PASSWORD_VALIDATION_SCHEMA } from "../../../Validations/Validations";

const SetPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // !location?.state?.email && navigate("/");
  }, []);

  const handleSubmit = (values) => {
    const data = {
      apiEndpoint: SET_PASSWORD_API_URL,
      requestData: JSON.stringify(values),
    };

    dispatch(setNewPassword(data)).then((res) => {
      if (res.type === "setNewPassword/fulfilled") {
        navigate("/");
      }
    });
  };

  return (
    <div className="flex items-center justify-center px-4 w-screen py-12 h-full">
      <div className="bg-white shadow-lg rounded-xl w-full md:w-[630px] p-8">
        <div className="text-center mb-6">
          {/* <img width={150} src={Images.LOGO_IMG} alt="Logo" className="mx-auto mb-2" /> */}
          <h3 className="font-dm-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[32px] leading-[40px] text-black text-center">Reset Password</h3>
        </div>
        <h3 className="w-full text-black mb-3 text-center">
          Create a new password
        </h3>
        <div className="w-full">
          <Formik
            initialValues={{
              ...NEW_PASSWORD_INITIAL_VALUES,
              email: location?.state?.email,
            }}
            validationSchema={NEW_PASSWORD_VALIDATION_SCHEMA}
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
                    type="password"
                    required={true}
                    name="newPassword"
                    label={"New Password"}
                    value={values.newPassword}
                    onBlurHandle={handleBlur}
                    placeholder="Enter new password"
                    onChangeHandle={handleChange}
                    className="w-full mb-0 p-2 border rounded"
                    error={
                      errors.newPassword && touched.newPassword
                        ? errors.newPassword
                        : ""
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputField
                    type="password"
                    required={true}
                    name="confirmPassword"
                    label={"Confirm Password"}
                    value={values.confirmPassword}
                    onBlurHandle={handleBlur}
                    placeholder="Confirm your password"
                    onChangeHandle={handleChange}
                    className="w-full mb-0 p-2 border rounded"
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : ""
                    }
                  />
                </div>

                <div className="mt-6">
                  <CustomBtn
                    text="Save"
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
  );
};

export default SetPasswordForm;
