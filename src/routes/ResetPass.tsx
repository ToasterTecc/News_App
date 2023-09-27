import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
      "Please enter a valid email"
    )
    .required("Email is required"),
});
const ResetPass = () => {
  return (
    <div>
    <h1>Reset Password</h1>
    <Formik
      initialValues={{
        email: ''
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
        
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  </div>
  )
}

export default ResetPass