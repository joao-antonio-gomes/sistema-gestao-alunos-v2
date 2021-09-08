import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core'
import {useField} from 'formik'

const SelectCustom = ({name, children, ...otherProps}) => {
    const [field, meta] = useField(name)

    const style = { width: '100%', marginBottom: '1.5vh'}

    const configSelect = {
        ...field,
        ...otherProps,
        select: false,
        fullWidth: true,
        variant: 'outlined',
        size: 'small',
    }

    if (meta && meta.touched && meta.error) {
        configSelect.error = true
        configSelect.helperText = meta.error
    }

    return (
        <FormControl size={'small'} style={style}
                     variant='outlined'>
            <InputLabel id='turma'>Turma</InputLabel>
            <Select {...configSelect}>
                <MenuItem value={''}>
                    <em>None</em>
                </MenuItem>
                {children.map(el =>
                    <MenuItem key={el} value={el}>{el}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default SelectCustom
