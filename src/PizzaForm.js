import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'

const DBurl = 'https://reqres.in/api/users'
const initialFormValues = {
    username: '',
    size: '',
    instructions: '',
    toppings: {
        pepperoni: false,
        sausage: false,
        jalopeno: false,
        onions: false,
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
    size: yup
        .string(),
    instructions: yup
        .string()
})



function Form(props) {
    

    const [users, setUsers] = useState([])
    const [userValues, setUserValues] = useState(initialFormValues)
    const [formDisabled, setFormDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const postUser = user => {
        axios.post(DBurl, user)
            .then(res => {
                setUsers([...users, res.data])
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
            size: userValues.size === 'small' ? false : true,
            instructions: userValues.instructions,
            toppings: Object.keys(userValues.toppings)
                .filter(topping => userValues.toppings[topping] === true)
        }
        postUser(newUser)
        setUserValues(initialFormValues)
    }
    const onInputChange = evt => {
        const name = evt.target.name
        const size = evt.target.size
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
            toppings: {
                ...userValues.toppings,
                [name]: isChecked,
            }
        })
    }
    return <div>
         <h1>Pizza Pizza</h1>
      <MakeForm
        values={userValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={formDisabled}
        errors={formErrors}
      />
    </div>
}

const MakeForm = (props) => {
    const {
            values,
            onInputChange,
            onCheckboxChange,
            onSubmit,
            disabled,
            errors,
        } = props
        return (
            <form className='form container'>
                <h2>Ordering Form</h2>
                <div className='errors'>
                    {errors.username}
                </div>
                <label>Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    /></label><br />
                <label>Size:&nbsp;
          <select
                        name='size'
                        value={values.size}
                        onChange={onInputChange}
                    >
                        <option defaultValue=''>Please choose</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                    </select></label><br />
                <label>Pepperoni:&nbsp;
        <input
                        checked={values.pepperoni}
                        onChange={onCheckboxChange}
                        name='pepperoni'
                        type='checkbox'
                    /></label><br />
                <label>Sausage:&nbsp;
        <input
                        checked={values.sausage}
                        onChange={onCheckboxChange}
                        name='sausage'
                        type='checkbox'
                    /></label><br />
                <label>Jalopeno:&nbsp;
        <input
                        checked={values.jalopeno}
                        onChange={onCheckboxChange}
                        name='jalopeno'
                        type='checkbox'
                    /></label><br />
                <label>Onion:&nbsp;
        <input
                        checked={values.onion}
                        onChange={onCheckboxChange}
                        name='onion'
                        type='checkbox'
                    /></label><br />
                <label>
                    Special instructions:&nbsp;
                    </label><br />
                <textarea
                value={values.instructions}
                onChange={onInputChange}
                name='instructions'
                type='text'>
                </textarea><br />
    
                <button onClick={onSubmit} disabled={disabled}>Add to Order</button>
            </form>
        );
    }
    

export default Form