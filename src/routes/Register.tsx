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
  accountType: Yup.string().required("An account type is required"),

  //WIP: needs YUP conditional validation for the other initial values**
});


const Register = () => {
  return (
    <div>
    <h1>Register</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        accountType: '',
        mobilePhoneNumber: '',
        businessName: '',
        businessWebsite: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
      <Form>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" placeholder="email" type="email" className="border-solid border-2 border-indigo-600"/>
        {errors.email && touched.email ? <div className='bg-red-400'>{errors.email}</div> : null}

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="password" type="password" className="border-solid border-2 border-indigo-600"/>
        {errors.password && touched.password ? <div className='bg-red-400'>{errors.password}</div> : null}
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field id="confirmPassword" name="confirmPassword" placeholder="confirm password" type="password" className="border-solid border-2 border-indigo-600"/>
        {errors.confirmPassword && touched.confirmPassword ? <div className='bg-red-400'>{errors.confirmPassword}</div> : null}

        <label htmlFor="accountType">Account Type</label>
        <Field id="accountType" name="accountType" placeholder="Please select your account type" as="select" className="border-solid border-2 border-indigo-600">
        <option value=""></option>
        <option value="user">User</option>
        <option value="business">Business</option>
        </Field>
        {/* Conditional fields */}
        {values.accountType === 'business' && (
            <>
              <label htmlFor="mobilePhoneNumber">Mobile Phone Number</label>
              <Field
                type="tel"
                id="mobilePhoneNumber"
                name="mobilePhoneNumber"
                placeholder="Enter mobile phone number"
                className="border-solid border-2 border-indigo-600"
              />

              <label htmlFor="businessName">Business Name</label>
              <Field
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Enter business name"
                className="border-solid border-2 border-indigo-600"
              />

              <label htmlFor="businessWebsite">Business Website</label>
              <Field
                type="text"
                id="businessWebsite"
                name="businessWebsite"
                placeholder="Enter business website"
                className="border-solid border-2 border-indigo-600"
              />
            </>
          )}
        {errors.accountType && touched.accountType ? <div className='bg-red-400'>{errors.accountType}</div> : null}


        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  </div>
  )
}

export default Register