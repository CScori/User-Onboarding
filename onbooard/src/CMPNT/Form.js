import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Button, FormGroup, Label } from 'reactstrap';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'

const User = ({ values, errors, touched, status }) => {

    const [login, setLogin] = useState([]);
    useEffect(() => {
    if (status) {
            setLogin([...login, status]);
        }
    }, [status]);

    return (
        <div>
            <Form>
                <FormGroup>
                    <Label htmlFor="name">Name
                    <Field type="name" name="name" placeholder="First and Last Name" />
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
                    <Field type="password" name="password" placeholder="Please Create a Unique Password" />
                        {touched.password && errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="Terms"> Terms of Service
                    <Field type="checkbox" name="terms" checked={values.terms}></Field>

                    </Label>
                </FormGroup>

                <Button>Submit</Button>
            </Form>


        {login.map(log => (
            <ul key={log.id}>
                <li>{log.name}</li>
                <li>{log.email}</li>
                <li>{log.terms}</li>
            </ul>

        ))}
        </div>
    )
};

const FormikForm = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
        }
    },

    validateSchema: Yup.object().shape({
        name: Yup.string().required('Please Enter First and Last Name'),
        email: Yup.string().email('Please Enter a Valid Email'),
        password: Yup.string().min(8, 'Please Enter a Password with 8 or more charachters, and letters and numbers')
        //  terms: Yup.string.required('Please Read and Agree to Terms of Service')
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post('https://reqres.in/api/users/', values)
            .then(res => {
                setStatus(res.data)
                console.log(res)
            })
            .catch(err => console.log(err.res))
    }
    //handle
})(User)

export default FormikForm
