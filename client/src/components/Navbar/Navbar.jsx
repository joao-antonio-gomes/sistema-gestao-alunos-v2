import React, {useState} from 'react'
import {
    AppBar,
    Drawer,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {AccountCircle, Close, Home, School} from '@material-ui/icons'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        height: theme.spacing(8),
    },
    iconMenu: {
        color: '#f4eeee',
        cursor: 'pointer',
    },
    titleWeb: {
        display: 'none',
        [theme.breakpoints.up(800)]: {
            display: 'flex',
        },
    },
    titleMobile: {
        [theme.breakpoints.up(800)]: {
            display: 'none',
        },
    },
    drawer: {},
    drawerPaper: {
        color: '#f4eeee',
        width: '30vw',
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none',
        [theme.breakpoints.down(400)]: {
            width: '50vw',
        },
        [theme.breakpoints.up(400)]: {
            width: '40vw',
        },
        [theme.breakpoints.up(450)]: {
            width: '35vw',
        },
        [theme.breakpoints.up(450)]: {
            width: '30vw',
        },
        [theme.breakpoints.up(650)]: {
            width: '25vw',
        },
        [theme.breakpoints.up(800)]: {
            width: '20vw',
        },
        [theme.breakpoints.up(1000)]: {
            width: '15vw',
        },
    },
    drawerGroupIcons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    drawerIcon: {
        display: 'flex',
        textDecoration: 'none',
        color: '#f4eeee',
        alignItems: 'center',
        width: '100%',
        height: theme.spacing(8),
        cursor: 'pointer',
        transition: 'all .2s linear',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            transition: 'all .2s linear',
        },
    },
    themeIcon: {
        display: 'flex',
        marginLeft: theme.spacing(2),
        alignItems: 'center',
        width: '100%',
    },
    menuIcon: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(3),
    },
    BackdropProps: {
        background: 'transparent',
    },
}))

const Navbar = (props) => {
    const classes = useStyles({props})
    const [openDrawer, setOpenDrawer] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <AppBar className={classes.navbar}
                    position={'static'}>
                <Toolbar className={classes.toolbar}>
                    <IconButton className={classes.iconMenu}
                                data-testid={'menu'}
                                onClick={() => setOpenDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant={'h6'}
                                className={classes.titleWeb}>Sistema de Gestão Escolar</Typography>
                    <Typography variant={'h6'}
                                className={classes.titleMobile}>SGE</Typography>

                    <div className={classes.userIcons}>
                        <IconButton
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Perfil</MenuItem>
                            <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                            <MenuItem onClick={handleClose}>Sair</MenuItem>
                        </Menu>
                    </div>
                    {/*{props.children}*/}
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer}
                    ModalProps={{
                        BackdropProps: {
                            classes: {
                                root: classes.BackdropProps,
                            },
                        },
                    }}
                    onClose={(event, reason) => {
                        if (reason == 'backdropClick') {
                            setOpenDrawer(false)
                        }
                    }}
                    anchor={'left'}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant={'temporary'}
                    open={openDrawer}>
                <div className={classes.drawerGroupIcons}>
                    <a onClick={handleCloseDrawer}
                          className={classes.drawerIcon}>
                        <Close className={classes.menuIcon} />
                        <Typography variant={'body2'}>
                            Fechar Menu
                        </Typography>
                    </a>
                    <Link to={'/'}
                          onClick={handleCloseDrawer}
                          data-testid={'inicio'}
                          className={classes.drawerIcon}>
                        <Home className={classes.menuIcon} />
                        <Typography variant={'body2'}>
                            Início
                        </Typography>
                    </Link>
                    <Link to={'/registroAluno'}
                          onClick={handleCloseDrawer}
                          data-testid={'novoAluno'}
                          className={classes.drawerIcon}>
                        <School className={classes.menuIcon} />
                        <Typography variant={'body2'}>
                            Novo Aluno
                        </Typography>
                    </Link>
                    <div className={classes.themeIcon}>
                        {props.children}
                        <Typography variant={'body2'}>
                            Tema {props.children.props.checked ? 'Light' : 'Dark'}
                        </Typography>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar
