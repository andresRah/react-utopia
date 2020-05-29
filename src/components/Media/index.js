import React from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip
} from 'reactstrap'

export const Media = ({ name, url, icon, tooltipId }) => {
  return (
    <>
      <NavItem>
        <Nav className='align-items-lg-center ml-lg-auto' navbar>
          <NavLink
            className='nav-link-icon'
            href={url}
            id={tooltipId}
            target='_blank'
          >
            <i className={icon} />
            <span className='nav-link-inner--text d-lg-none ml-2'>
              {name}
            </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target={tooltipId}>
            Like us on {name}
          </UncontrolledTooltip>
        </Nav>
      </NavItem>
    </>
  )
}
