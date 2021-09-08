import React from 'react'
import {useField} from 'formik'
import {FormControl, TextField} from '@material-ui/core'

const TextfieldCustom = ({name, ...otherProps}) => {
    const [field, meta] = useField(name)

    const style = {marginBottom: '1.5vh'}

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        size: 'small',
        style: style,
    }

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true
        configTextfield.helperText = meta.error
    }

    return (
        <TextField {...configTextfield} />
    )
}

export default TextfieldCustom
