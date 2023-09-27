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
});


const Login = () => {
  return (
    <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
      <Form>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" placeholder="email" type="email" className="border-solid border-2 border-indigo-600"/>
        {errors.email && touched.email ? <div className='bg-red-400'>{errors.email}</div> : null}

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="password" type="password" className="border-solid border-2 border-indigo-600"/>
        {errors.password && touched.password ? <div className='bg-red-400'>{errors.password}</div> : null}
        
        <a href="/reset-password" className="text-blue-600 visited:text-purple-600">Forgot Password?</a>
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  </div>
);
  
}

export default Login