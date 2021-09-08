import {createTheme, CssBaseline, makeStyles, Switch as SwitchTheme, ThemeProvider} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import {useState} from 'react'
import RegisterStudent from './pages/RegisterStudent'
import Homepage from './pages/Homepage'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import ApiProvider from './providers/Api'

const useStyles = makeStyles((theme) => ({
    switchTheme: {
        margin: 0,
    },
}))

function App() {
    const [themeChoice, setThemeChoice] = useState(false)

    const lightTheme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#2f8be6',
                dark: '#174c7f',
                light: '#285e98',
            },
            secondary: {
                main: '#d73838',
            },
        },
    })

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#174c7f',
                dark: '#174c7f',
                light: '#285e98',
            },
            secondary: {
                main: '#bfbfbf',
            },
        },
    })
    const classes = useStyles()

    return (
        <ApiProvider>
            <ThemeProvider theme={themeChoice ? darkTheme : lightTheme}>
                <CssBaseline />
                <Router>
                    <Navbar>
                        <SwitchTheme className={classes.switchTheme}
                                     checked={themeChoice}
                                     data-testid={'switchTheme'}
                                     onChange={() => setThemeChoice(!themeChoice)} />
                        {/*<input type='checkbox'
                           checked={darkMode}
                           data-testid={'switchTheme'}
                           onChange={() => setDarkMode(!darkMode)} />*/}
                    </Navbar>
                    <Switch>
                        <Route exact
                               path={'/'}>
                            <Homepage />
                        </Route>
                        <Route exact
                               path={'/registroAluno'}>
                            <RegisterStudent />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </ApiProvider>
    )
}

export default App
