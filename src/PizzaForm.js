import React from 'react'

function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
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
            <label>Size:&nbsp;
      <select
                    name='size'
                    value={values.size}
                    onChange={onInputChange}
                >
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>large</option>
                </select></label>
            <label>Toppings:&nbsp;
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