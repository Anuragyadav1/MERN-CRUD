import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {getUser,editUser} from '../service/api'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }

`

export default function EditUser() {
  const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
  }

  const navigate = useNavigate()
  const[user,setUser] = useState(defaultValue)
  const {id} = useParams()
  const [errors, setErrors] = useState({});

  const validateInput = () => {
    const newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!user.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!user.phone.trim()) {
      newErrors.phone = 'Phone No is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };




  const userDetails = async()=>{
 const response = await getUser(id)
   console.log(response.data)
   setUser(response.data)
  }

  useEffect(()=>{
    userDetails() 
  },[])

  const onInputChange = (e)=>{
        // console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        setErrors({ ...errors, [e.target.name]: '' });   // Clear error when user starts typing
  }

  const handleSubmit = async()=>{
    // console.log(user)
    if(validateInput()){
    await editUser(user,id)
    setUser(defaultValue)
    navigate('/all-users')
    }

  }
  return (
   <Container>
    <Typography variant='h4'>
       Edit User
    </Typography>

      <FormControl>
         <InputLabel>
           Name
         </InputLabel>
         <Input onChange={onInputChange} name='name' value={user.name}/>
         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </FormControl>

      <FormControl>
         <InputLabel>
           User Name
         </InputLabel>
         <Input onChange={onInputChange} name='username' value={user.username}/>
         {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </FormControl>
      
      <FormControl>
         <InputLabel>
           Email
         </InputLabel>
         <Input onChange={onInputChange} name='email' value={user.email}/>
         {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </FormControl>

      <FormControl>
         <InputLabel>
           Phone No
         </InputLabel>
         <Input onChange={onInputChange} name='phone' value={user.phone}/>
         {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={handleSubmit}>Save</Button>
      </FormControl>

   </Container>
  )
}
