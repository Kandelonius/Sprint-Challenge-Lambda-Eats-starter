import React from 'react'

function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        size,
        onSubmit,
        disabled,
        errors,
    } = props
    // debugger
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
                    {/* <option value='large'>large</option> */}
                </select></label>
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
            <textarea>
            </textarea><br />

            <button onClick={onSubmit} disabled={disabled}>Submit</button>
        </form>
    );
}

export default Form