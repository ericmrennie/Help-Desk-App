import React, { useState } from 'react';

const Form = ({ initialState, onSubmit, children }) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData(initialState);
    };

    return (
        <form onSubmit={handleSubmit}>
            {React.Children.map(children, child => {
                return React.cloneElement(child, { handleInputChange, value: formData[child.props.name] });
            })}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
