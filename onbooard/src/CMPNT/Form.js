import React, { useState, useEffect } from 'react'
import * as Yup from 'Yup'
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { withFormik, Form, Field, validateYupSchema } from 'formik'
import axios from 'axios'

const Form = (values, errors, touched, status) => {

    const [login, setLogin] = useState([]);
    useEffect(() => {
        if (status) {
            setAnimals([...login, status]);
        }
    }, [status]);

    return (
        <div>
            <Form>
            <FormGroup>
                    <Label htmlFor="name">Name
                    <Field type="text" name="name" placeholder="First and Last Name" />
                    {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}
                    </Label>
                </FormGroup>
                {/* genser drop down */}
                {/* birthdate calendar */}
                <FormGroup>
                    <Label htmlFor="email">Email
                    <Field type="email" name="email" placeholder="Enter Personal Email" /> {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password
                    <Field type="text" name="password" placeholder="Please Create a Unique Password" />
                    {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Terms"> Terms of Service
                    <Field type="checkbox" name="terms" checked={values.terms}>I accept and agree to Terms of Service</Field>
                    </Label>
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>

        </div>
    )
}

const FormikForm = withFormik({
 mapPropsToValues({ name, email, password, terms })  {
     return {
         name: name || "",
         email: email || "",
         password: password || "",
         terms: terms || false,
     }
 } , 
 validateSchema: Yup.object().shape({
     name: Yup.string.required('Please Enter First and Last Name'),
     email: Yup.string.email('Please Enter a Valid Email'),
     password: Yup.string.min(8, 'Please Enter a Password with 8 or more charachters, and letters and numbers')
    //  terms: Yup.string.required('Please Read and Agree to Terms of Service')
 })

 //handle
})(Form)

export default FormikForm
