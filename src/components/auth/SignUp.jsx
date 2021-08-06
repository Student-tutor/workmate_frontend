import React, { Component } from 'react'
import {
  Box,
  Background,
  Title,
  Form,
  FormControl,
  InputField,
  Input,
} from "../../Styled";

const formElements = [
    {
        type: 'email',
        id: 'email',
        name: 'email',
        placeholder: 'Example@gmail.com.....',
        class: 'email'
    },
    {
        type: 'password',
        id: 'password',
        name: 'password',
        placeholder: 'PLease Enter Password',
        class: 'password'
    },
    {
        type: 'submit',
        value: 'submit',
        class: "btn"

    },
]

export default class SignUp extends Component {
    state = {
        email: null,
        password: null,
    } 

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <Background>
                <Box>
                        <Title>Sign up</Title>
                        <Form onSubmit={this.handleSubmit}>
                            
                                {formElements.map(form => (
                                    <FormControl className={form.class}>
                                        <InputField>
                                            <Input type={form.type} name={form.name} id={form.id} placeholder={form.placeholder}  onChange={this.handleChange}/>
                                        </InputField>
                                    </FormControl>
                            ))}
                              
                        </Form>
                </Box>
            </Background>
        )
    }
}

