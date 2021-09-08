import React, {useState} from 'react'
import {
    Button, Checkbox, Collapse, FormControl, FormControlLabel, FormGroup,
    Grid,
    makeStyles, Snackbar, TextField,
} from '@material-ui/core'
import {useFormik, Formik, Form} from 'formik'
import MuiAlert from '@material-ui/lab/Alert'
import * as Yup from 'yup'
import TextfieldCustom from '../components/FormInputs/TextfieldCustom'
import SelectCustom from '../components/FormInputs/SelectCustom'
import CheckboxCustom from '../components/FormInputs/CheckboxCustom'

function Alert(props) {
    return <MuiAlert elevation={6}
                     variant='filled' {...props} />
}

const useStyles = makeStyles((theme) => ({
    botoesDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(5),
        [theme.breakpoints.down(600)]: {
            paddingTop: theme.spacing(1),
        }
    },
}))

const formValidation = Yup.object().shape({
    nome_aluno: Yup.string()
        .required('Preenchimento obrigatório!'),
    data_aniversario: Yup.date()
        .required('Preenchimento obrigatório!'),
    turma: Yup.number().integer()
        .required('Por favor, selecione uma turma!')
        .typeError('Por favor, insira um telefoen válido!'),
    nome_responsavel: Yup.string()
        .required('Preenchimento obrigatório!'),
    telefone_responsavel: Yup.number().integer()
        .required('Preenchimento obrigatório!')
        .typeError('Por favor, insira um telefoen válido!'),
    autorizado_retirar: Yup.string()
        .required('Preenchimento obrigatório!'),
    parentesco_autorizado_retirar: Yup.string()
        .required('Preenchimento obrigatório!'),
    check_imagem: Yup.boolean(),
    check_restricao: Yup.boolean(),
    obs_restricao: Yup.string()
        .when('check_restricao', {
            is: true,
            then: Yup.string().required('Preenchimento obrigatório!')
        })
})

const initialValues = {
    nome_aluno: '',
    data_aniversario: '',
    turma: '',
    nome_responsavel: '',
    telefone_responsavel: '',
    obs_adicionais: '',
    autorizado_retirar: '',
    parentesco_autorizado_retirar: '',
    obs_restricao: '',
    check_restricao: false,
    check_imagem: false,
}

const arrayTurma = [101, 102, 103]

const RegisterStudent = () => {
    const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false)
    const [openSnackbarWarn, setOpenSnackbarWarn] = useState(false)
    const [openCollapse, setOpenCollapse] = useState(false)
    const classes = useStyles()
    const setCollapse = () => {
        setOpenCollapse(!openCollapse)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway' || reason !== 'clickaway') {
            setOpenSnackbarWarn(false)
        }
    }

    return (
        <Grid container
              justify={'center'}
              style={{
                  paddingTop: '5vh',
              }}>
            <Grid item
                  xs={10}
                  md={10}>
                <Formik initialValues={{...initialValues}}
                        validationSchema={formValidation}
                        onSubmit={(values) => {
                            fetch('http://localhost:9000/students/new', {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(values),
                            })
                                .then(res => {
                                    console.log(res)
                                    if (res.status === 200) {
                                        setOpenSnackbarSuccess(true)
                                    } else {
                                        setOpenSnackbarWarn(true)
                                    }
                                })
                        }}>
                    <Form>
                        <Grid container
                              spacing={2}>
                            <Grid item
                                  xs={12}
                                  sm={6}
                                  md={6}>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <TextfieldCustom
                                        name={'nome_aluno'}
                                        label={'Nome do Aluno'}
                                    />
                                </Grid>
                                <Grid container
                                      spacing={1}>
                                    <Grid item
                                          xs={12}
                                          sm={6}
                                          md={6}>
                                        <TextfieldCustom
                                            type={'date'}
                                            InputLabelProps={{shrink: true}}
                                            name={'data_aniversario'}
                                            label={'Data de Aniversário'}
                                        />
                                    </Grid>
                                    <Grid item
                                          xs={12}
                                          sm={6}
                                          md={6}>
                                        <SelectCustom
                                            labelId={'turma'}
                                            label={'Turma'}
                                            id={'turma'}
                                            defaultValue={''}
                                            name={'turma'}>
                                            {arrayTurma}
                                        </SelectCustom>
                                    </Grid>
                                </Grid>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <TextfieldCustom
                                        name={'nome_responsavel'}
                                        label={'Nome do Responsável'}
                                    />
                                </Grid>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <TextfieldCustom
                                        name={'telefone_responsavel'}
                                        label={'Telefone do Responsável'} />
                                </Grid>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <CheckboxCustom name={'check_imagem'}
                                                    label={'Autorização de imagem?'} />
                                </Grid>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <CheckboxCustom collapseChange={setCollapse}
                                                    name={'check_restricao'}
                                                    label={'O aluno possui restrição alimentar?'} />
                                </Grid>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <Collapse in={openCollapse}>
                                        <TextfieldCustom
                                            name='obs_restricao'
                                            label='Descreva a restrição'
                                            style={{width: '100%'}}
                                        />
                                    </Collapse>
                                </Grid>
                            </Grid>
                            <Grid item
                                  xs={12}
                                  sm={6}
                                  md={6}>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <TextfieldCustom
                                        name={'autorizado_retirar'}
                                        label={'Autorizado a Retirar'}
                                    />
                                </Grid>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <TextfieldCustom
                                        name={'parentesco_autorizado_retirar'}
                                        label={'Parentesco do Autorizado a Retirar'}
                                    />
                                </Grid>
                                <Grid item
                                      xs={12}
                                      md={12}>
                                    <TextfieldCustom
                                        minRows={4}
                                        multiline={true}
                                        name={'obs_adicionais'}
                                        label={'Observações Adicionais'}
                                    />
                                </Grid>

                                <div className={classes.botoesDiv}>
                                    <Button variant={'contained'}
                                            size={'small'}
                                            style={{width: '49%'}}
                                            color={'secondary'}>Cancelar</Button>
                                    <Button variant={'contained'}
                                            size={'small'}
                                            type={'submit'}
                                        // onClick={registerStudent}
                                            style={{width: '49%'}}
                                            color={'primary'}>Cadastrar</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
                <Snackbar open={openSnackbarSuccess}
                          anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                          autoHideDuration={4000}
                          onClose={handleClose}>
                    <Alert onClose={handleClose}
                           severity='success'>
                        Cadastro realizado com sucesso!
                    </Alert>
                </Snackbar>
                <Snackbar open={openSnackbarWarn}
                          anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                          autoHideDuration={4000}
                          onClose={handleClose}>
                    <Alert onClose={handleClose}
                           severity='error'>
                        Houve um erro ao realizar o cadastro, tente novamente!
                    </Alert>
                </Snackbar>
            </Grid>
        </Grid>
    )
}

export default RegisterStudent
