
export const formValidation = (values) => {
    let errors = {};

    // username
    if (!values.username.trim()) {
        errors.username = 'Username is required'
    }

    // email
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid'
    }

    // password
    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    return errors;
}