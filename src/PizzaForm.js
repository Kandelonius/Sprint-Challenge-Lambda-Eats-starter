import React from 'react'

function Form(props) {
    const {
        values, 
        onInputChange, 
        onCheckboxChange,
        onSubmit,
        errors,
    } = props
    // debugger
    return (
        <form className='form container'>
            <h2>Onboarding Form</h2>
            <div className='errors'>
                {errors.username}
                {errors.email}
                {errors.password}
            </div>
            <label>Username:&nbsp;
                <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                /></label><br />
            <label>Terms of service:&nbsp;
                <input
                    checked={values.topping}
                    onChange={onCheckboxChange}
                    name='topoing'
                    type='checkbox'
                /></label>

            <button onClick={onSubmit} disabled={disabled}>Submit</button>
        </form>
    );
}

export default Form