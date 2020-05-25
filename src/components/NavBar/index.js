import React from 'react'
 import {
   Navbar, 
   Nav,
   NavItem,
   NavLink, 
      Container,
   NavbarBrand,
   UncontrolledTooltip,
   Row
 } from "reactstrap"
  import Toolbar from '@material-ui/core/Toolbar'
  import Paper from '@material-ui/core/Paper'
  import AppBar from '@material-ui/core/AppBar'
  import Typography from '@material-ui/core/Typography'



export const NavBar = () => {
    
  return (   
  
    <>
     <Row>   
   <AppBar position = 'sticky'>
     <Toolbar>
       <Typography variant = 'title' color= 'inherit'>
       NavBar
       <header className="header-global">
      <Navbar
        className="navbar-main navbar-transparent navbar-light headroom"
        expand="lg"
        id="navbar-main">
            
      <Container>      
      <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
        </NavItem>
        </Nav>        
        </Container>
        </Navbar>
        </header>
      </Typography>
     </Toolbar>
   </AppBar> 
 </Row>
    
        </>
  )
}
