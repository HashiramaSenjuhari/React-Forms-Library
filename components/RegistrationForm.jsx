import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={titleStyle}>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <div style={inputContainerStyle}>
          <label htmlFor="firstName" style={labelStyle}>First Name:</label>
          <input {...register('firstName', { required: 'Required' })} style={inputStyle} />
          {errors.firstName && <p style={errorMessageStyle}>{errors.firstName.message}</p>}
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="lastName" style={labelStyle}>Last Name:</label>
          <input {...register('lastName', { required: 'Required' })} style={inputStyle} />
          {errors.lastName && <p style={errorMessageStyle}>{errors.lastName.message}</p>}
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            {...register('email', {
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            style={inputStyle}
          />
          {errors.email && <p style={errorMessageStyle}>{errors.email.message}</p>}
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input
            type="password"
            {...register('password', {
              required: 'Required',
              minLength: {
                value: 5,
                message: 'Password must be more than 4 characters',
              },
              maxLength: {
                value: 20,
                message: 'Password cannot be more than 20 characters',
              },
            })}
            style={inputStyle}
          />
          {errors.password && <p style={errorMessageStyle}>{errors.password.message}</p>}
        </div>

        <button type="submit" style={submitButtonStyle}>Register</button>
      </form>
    </div>
  );
};

const formContainerStyle = {
  textAlign: 'center',
  margin: '20px',
};

const formStyle = {
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  display: 'inline-block',
};

const titleStyle = {
  color: '#333',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  marginBottom: '5px',
};

const submitButtonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const errorMessageStyle = {
  color: 'red',
  fontSize: '14px',
  marginTop: '5px',
};

export default RegistrationForm;
