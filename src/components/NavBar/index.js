import React from 'react'
import { Media } from '../Media'
import { Navbar, Container } from 'reactstrap'
import { socialNetworks } from '../../data/social'

export const NavBar = () => {
  return (
    <header className='header-global'>
      <Navbar
        className='navbar-main navbar-transparent navbar-light headroom'
        expand='lg'
        id='navbar-main'
      >
        <Container>
          {socialNetworks.map(socialNetwork => <Media key={socialNetwork.id} {...socialNetwork} />)}
        </Container>
      </Navbar>
    </header>
  )
}
