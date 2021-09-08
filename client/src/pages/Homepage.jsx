import React, {useContext, useEffect, useState} from 'react'
import {ApiContext} from '../providers/Api'

const Homepage = () => {
    const [studentsList, setStudentsList, ] = useState('')
    const { api } = useContext(ApiContext)

    useEffect(async () => {
        const studentsData = await api.get('http://localhost:9000/students')
        setStudentsList(studentsData)
    }, [])

    useEffect(() => {
        console.log(studentsList)
    }, [studentsList])
    return (
        <div>
        </div>
    )
}

export default Homepage
