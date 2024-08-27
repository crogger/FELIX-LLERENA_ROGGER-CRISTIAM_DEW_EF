import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
            errors.firstName = 'First Name must contain only letters';
        }

        if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
            errors.lastName = 'Last Name must contain only letters';
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!/^\d{9}$/.test(formData.phone)) {
            errors.phone = 'Phone number must be 9 digits';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert(`Form submitted:\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
        }
    };

    return (
        <div className='formulario'>
        <form className="form" onSubmit={handleSubmit}>
            <h3>Ingresa tu nombre</h3>
            <input
                type="text"
                name="firstName"
                placeholder="Ingresa tu Nombre"
                value={formData.firstName}
                onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
             <h3>Ingresa tu Apellido</h3>
            <input
                type="text"
                name="lastName"
                placeholder="Ingresa tu Apellido"
                value={formData.lastName}
                onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
             <h3>Ingresa tu correo Electronico</h3>
            <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
             <h3>Ingresa tu numero Telefonico</h3>
            <input
                type="tel"
                name="phone"
                placeholder="Numero Telefonico"
                value={formData.phone}
                onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <button className='button' type="submit">Enviar</button>
         </form>
         
        </div>
    );
};

export default Form;
