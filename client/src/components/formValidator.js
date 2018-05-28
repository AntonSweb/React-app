import React from 'react';
import validator from 'react-validation';

export const required = (value) => {
    if (!value ) {
        return <span className="form-error is-visible">Required</span>;
    }
};

export const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`
    }
};

export const lt = (value, props) => {
    // get the maxLength from component's props
    if (value.toString().trim().length > props.maxLength) {
        // Return jsx
        return <span className="error">The value exceeded {props.maxLength} symbols.</span>
    }
};

export const password = (value, props, components) => {
    // NOTE: Tricky place. The 'value' argument is always current component's value.
    // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
    // But if we're changing 'confirm' component - the condition will always be true
    // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
    if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
        // 'confirm' - name of input
        // components['confirm'] - array of same-name components because of checkboxes and radios
        return <span className="error">Passwords are not equal.</span>
    }
};