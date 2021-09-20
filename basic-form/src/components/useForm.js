// customize hook, form hook
import { useEffect, useState } from 'react'

export const useForm = (formValidation, submitedHandle) => {
    // this holds all the input data
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    // this alert the input error
    const [errors, setErrors] = useState({})
    const [checkSubmited, setCheckSubmitted] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(formValidation(values))
        setCheckSubmitted(true)
    }

    useEffect(() => {
        // check zero error & then submit
        if (Object.keys(errors).length === 0 && checkSubmited) {
            console.log('hi babe')
            submitedHandle()
        }
    }, [errors])

    return { values, errors, handleChange, handleSubmit }
}
