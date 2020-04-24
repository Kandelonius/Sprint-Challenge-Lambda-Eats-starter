import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import Form from './PizzaForm'


const url = 'https://reqres.in/api/users'
const initialFormValues = {
  username: '',
  size: '',
  Toppings: {
    pepperoni:false,
    sausage:false,
    jalopeno:false,
    onions:false,
  }
}
const initialFormErrors = {
  username: ''
  // size: '',
}
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'username must have at least 2 characters!')
    .required('username is required'),
})

const App = () => {
  const [users, setUsers] = useState([])
  const [userValues, setUserValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postUser = user => {
    axios.post(url, user)
      .then(res => {
        setUsers([...users, res.data])
        // debugger
      })
      .catch(err => {
        console.log(err)
        debugger
      })
  }

  useEffect(() => {
    formSchema.isValid(userValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [userValues])

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: userValues.username,
      size: userValues.size,
      TOS: Object.keys(userValues.TOS),
    }
    postUser(newUser)
    setUserValues(initialFormValues)
  }
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    const checked = evt.target.checked

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setUserValues({
      ...userValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.checked

    setUserValues({
      ...userValues,
      ...userValues.TOS,
      [name]: isChecked,
    })
  }

  return (
    <div>
      <h1>Pizza Pizza</h1>
      <Form
        values={userValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={formDisabled}
        errors={formErrors}
      />
      <Switch>
        {/* <Route path='/pizza/:id' component={Pizza} />
        <Route path="/" component={} /> */}
      </Switch>
    </div>
  );
};

export default App;