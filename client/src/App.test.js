import React from 'react'
import {
    findByAltText, findByTestId,
    findByText, getByTestId,
    getQueriesForElement,
    render,
    screen,
    waitFor,
    waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from './App'
import Navbar from './components/Navbar/Navbar'

describe('Menu', () => {
    test('Show Homepage', () => {
        render (<App />)
        const btnMenu = screen.getByTestId('menu')
        btnMenu.click();
        const btnInico = screen.getByTestId('inicio')
        btnInico.click();


        expect(screen.getByText('Homepage')).toBeInTheDocument()
    })
    test('Show Studentpage', () => {
        render (<App />)
        const btnMenu = screen.getByTestId('menu')
        btnMenu.click();
        const btnNovoAluno = screen.getByTestId('novoAluno')
        btnNovoAluno.click();


        expect(screen.getByText('RegisterStudent')).toBeInTheDocument()
    })
    /*test('Set Darkmode', () => {
        render (<App />)
        const btnMenu = screen.getByTestId('menu')
        btnMenu.click();
        const btnSwitchTheme = screen.getByTestId('switchTheme')
        btnSwitchTheme.click();

        console.log(btnSwitchTheme.checked)

        expect(btnSwitchTheme).toBeChecked()
    })*/
})
