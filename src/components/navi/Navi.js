import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="">CourseFinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://udemy.com">Udemy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://coursera.org">Coursera</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://datacamp.com">DataCamp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://pluralsight.com">Pluralsight</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className ="navbartext">InfoMerge</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;