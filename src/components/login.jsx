import '../assets/style/css/Font.css'
import TextField from '@mui/material/TextField'
import { Map } from './Map.jsx'
import '../assets/style/css/Createaccount.css'
import {
  Contenedormain,
  Contenedortwe,
  Contenedorinput,
  Boton
} from '../assets/style/stylecomponets/styled.js'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm.js'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/context.js'

export function Login () {
  const [users, setUsers] = useState([])

  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    password: ''
  })

  async function handleSubmit (e) {
    e.preventDefault()

    const logedUser = users.find(user => user.email === formValues.email)

    //Verifying admin user
    if (
      formValues.email === 'adminFood@yopmail.com' &&
      formValues.password === 'adminGeek123'
    ) {
      navigate('/home')
      setUser({
        name: logedUser.name,
        email: logedUser.email,
        role: logedUser.role
      })
    } else if (logedUser) {
      // Verifying client user
      logedUser.password === formValues.password ? navigate('/home') : null
      setUser({ name: formValues.name, email: formValues.email })
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        'https://fooddeliveryapi-uco3.onrender.com/users'
      )
      setUsers(response.data)
    }
   
    getUser()
  }, [])

  return (
    <Contenedormain>
      <div>
        <h2>Log in into your account</h2>
      </div>
      <Contenedorinput onSubmit={handleSubmit}>
        <TextField
          onChange={handleInputChange}
          value={formValues.email}
          name='email'
          id='standard-basic'
          required
          label='EMAIL'
          type='email'
          variant='standard'
        />
        <TextField
          onChange={handleInputChange}
          value={formValues.password}
          name='password'
          id='standard-basic'
          required
          label='PASSWORD'
          type='password'
          variant='standard'
        />
        <Contenedortwe>
          <Boton type='submit'>Log In</Boton>
        </Contenedortwe>
      </Contenedorinput>
    </Contenedormain>
  )
}
