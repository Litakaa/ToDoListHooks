import './Form.css'
import React, {useState} from 'react';

const Form = (props) => {
    const [value, setValue] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        props.putTodo(value)
        setValue('')
    }
    const formChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <form className="form" onSubmit={formSubmit}>
            <input type="text"
                   placeholder="Enter text..."
                   className="input"
                   value={value}
                   onChange={formChange}
            />
        </form>
    );
};

export default Form;