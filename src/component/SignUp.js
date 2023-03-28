import React from 'react'
import {Formik, Form} from 'formik' ;
import Textfield from './Textfield';
import * as Yup from 'yup';

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
    .max(15, "Must be 15 character or less")
    .required('Required'),
    lastName:  Yup.string()
    .max(15, "Must be 20 character or less")
    .required("Required"),
    email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
    password: Yup.string()
    .min(6,"Atleast must be 6 character")
    .required("Passwird is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must be same')
    .required("Confirm password is required"),
  })
  return ( 
    <Formik 
    initialValues={{
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : "",
    }}
    validationSchema = {validate}
    onSubmit={value=>{
      console.log(value);
    }}
    >
        {formik =>(  
        <div>
        <h1 className='my-4 font-weight-bold .dispaly-4'>SignUp</h1>
        <Form>
            <Textfield label="First Name" name="firstName" type="text"/>
            <Textfield label="Last Name" name="lastName" type="text"/>
            <Textfield label="Email" name="email" type="email"/>
            <Textfield label="Password" name="password" type="password"/>
            <Textfield label="Confirm Password" name="confirmPassword" type="password"/>
            <button className='btn btn-dark mt-3' type='submit'>Submit</button>
            <button className='btn btn-danger mt-3 ml-3' type='reset'>Reset</button>
        </Form>
        </div>
        )}
    </Formik> 
  )
}

export default SignUp
