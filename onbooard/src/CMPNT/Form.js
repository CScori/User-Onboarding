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
                    <Label htmlFor="name">Name</Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="check">Terms of Service</Label>
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>

        </div>
    )
}

const FormikForm = withFormik({
 mapPropsToValues({ name, email, password, check })  {
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
