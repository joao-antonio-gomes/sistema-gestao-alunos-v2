import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from '@material-ui/core'
import {useField, useFormikContext} from 'formik'

const CheckboxCustom = ({name, label, legend, collapseChange, ...otherProps}) => {
    const {setFieldValue} = useFormikContext()
    const [field, meta] = useField(name)
    const handleChange = e => {
        const {checked} = e.target
        setFieldValue(name, checked)
        if (collapseChange) {
            collapseChange()
        }
    }
    const configCheckbox = {
        ...field,
        onChange:handleChange,
    }

    const configFormControl = {}

    if (meta && meta.touched && meta.error) {
        configFormControl.error = true
        configFormControl.helperText = meta.error
    }

    return (
        <FormControl {...configFormControl}>
            <FormGroup>
                <FormControlLabel
                    label={label}
                    labelPlacement={'start'}
                    control={<Checkbox
                        {...configCheckbox}
                        label={label}
                        color={'primary'} />} />
            </FormGroup>
        </FormControl>
    )
}

export default CheckboxCustom
