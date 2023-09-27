import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
      "Please enter a valid email"
    )
    .required("Email is required"),
  password: Yup.string()
  .min(12, "Password must be at least 12 characters long")
  .max(32, "Max 32 characters").matches(
    /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?\\]).{12,32}$/g,
    "Password must contain a special character"
  )
  .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
const ConfirmReset = () => {
  return (
    <div>
    <h1>ConfirmReset</h1>
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
      <Form>
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="password" type="password" className="border-solid border-2 border-indigo-600"/>
        {errors.password && touched.password ? <div className='bg-red-400'>{errors.password}</div> : null}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field id="confirmPassword" name="confirmPassword" placeholder="confirm password" type="password" className="border-solid border-2 border-indigo-600"/>
        {errors.confirmPassword && touched.confirmPassword ? <div className='bg-red-400'>{errors.confirmPassword}</div> : null}
        
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  </div>
  )
}

export default ConfirmReset