import React, { useState, useEffect } from 'react'
import * as Yup from 'Yup'
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { withFormik, Form, Field } from 'formik'
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
                    </Label>
                </FormGroup>
                {/* sex drop down */}
                {/* birthdate calendar */}
                <FormGroup>
                    <Label htmlFor="email">Email
                    <Field type="email" name="email" placeholder="Enter Personal Email" />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password
                    <Field type="text" name="password" placeholder="Please Create a Unique Password" />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Terms"> Terms of Service
                    <Field type="checkbox" name="terms">I accept and agree to Terms of Service</Field>
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
         terms: terms || "",
     }
 }  
 //valid
 //handle
})(Form)

export default FormikForm
