import styled from '@emotion/styled'
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = styled(AppBar)`
    background:#111111;

    `
    const Tabs = styled(NavLink)`
     margin-right:20px;
     font-size:20px;
     color: inherit;
     text-decoration: none;
     

    `

export default function NavBar() {
    
  return (
    <Header position='static'>
        <Toolbar>
          <Tabs to = '/'>Home </Tabs>
          <Tabs to = '/add-user'>Add Users </Tabs>
          <Tabs to = '/all-users'>All Users </Tabs>
        </Toolbar>
    </Header>
   
  )
}
