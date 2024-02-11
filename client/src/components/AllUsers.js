import React, { useEffect,useState } from 'react'
import {Table,TableHead,TableRow,TableCell,TableBody,styled, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUserDetails, getUsers } from '../service/api'


const StyledTable = styled(Table)`
  width: 90%;
  margin:50px auto 0 auto
`
const THead = styled(TableRow)`
  background:#912457;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`
export default function AllUsers() {

  const [users, setUsers] = useState([]);

  const handleDeleteUser = async (id)=>{
     await deleteUserDetails(id)
     getAllUsers()
  }

  const getAllUsers = async() => {
     const users = await getUsers()
     /* console.log(users.data) */
     setUsers(users.data)
  }

  useEffect(()=>{
    getAllUsers()
  },[])

  return (
    <StyledTable>
    <TableHead>
      <THead>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>UserName</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell></TableCell>
      </THead>
    </TableHead>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>  
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" color='success' href={`/edit-user/${user._id}`} style={{marginRight:'10px'}}>Edit</Button>
              <Button variant="outlined" startIcon = {<DeleteIcon/>}  onClick={()=>handleDeleteUser(user._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
  </StyledTable>
  )
}
