import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Button, FormGroup, Label } from 'reactstrap';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import styled from 'styled-components'

const Cnt = styled.div`
background: teal;
opacity: 0.8;
width: 300px;
height: 200px;
padding: 50px;
border-radius: 25px;
`

const User = ({ values, errors, touched, status }) => {

    const [login, setLogin] = useState([]);
    useEffect(() => {
    if (status) {
            setLogin([...login, status]);
        }
    }, [status]);

    return (
        <Cnt>
            <Form>
                <FormGroup>
                    <Label htmlFor="name">Name
                    <Field type="name" name="name" placeholder="First and Last Name" />
                        {touched.name && errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="role">Role
                    <Field component="select" name="role">
                    <option >Please select an option</option>        
            <option value="student">Student</option>
            <option value="lead">Lead</option>
            <option value="teacher">Teacher</option>
          </Field>
                        {touched.role && errors.role && (
                            <p className="error">{errors.role}</p>
                        )}
                    </Label>
                </FormGroup>
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
        </Cnt>
    )
};

const FormikForm = withFormik({
    mapPropsToValues({ name, email, password, terms, role }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            role: role || "",
            terms: terms || false,
        }
    },

    validateSchema: Yup.object().shape({
        name: Yup.string().required('Please Enter First and Last Name'),
        email: Yup.string().email('Please Enter a Valid Email'),
        password: Yup.string().min(8, 'Please Enter a Password with 8 or more charachters, and letters and numbers'),
        role: Yup.string().oneOf(["student", "lead", "teacher"])
        .required("Please choose one!"),
        terms: Yup.boolean().required('Please Read and Agree to Terms of Service')
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
