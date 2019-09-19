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
                    <Label for="Name">Name</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>

        </div>
    )
}

export default Form
