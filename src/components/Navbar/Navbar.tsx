import React, { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoExit } from "react-icons/io5"
import { HiBars2 } from "react-icons/hi2"
import { Link } from "react-router-dom"
import {
  Nav,
  ButtonSidebar,
  NavLeft,
  NavList,
  NavItem,
  NavRight,
  NavCart,
  NavUser,
  NavLogo,
} from "./styles.module"
import { Sidebar } from "../Sidebar/Sidebar"

export const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const showSidebar = () => setVisible(!visible)

  const openSidebar = setVisible

  return (
    <Nav>
      <NavLeft>
        <ButtonSidebar onClick={showSidebar}>
          <HiBars2 size={25} />
        </ButtonSidebar>
        
        <NavLogo>Sneakers</NavLogo>
        <NavList>
          <NavItem>
            <Link to="/">Collections</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Men</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Woman</Link>
          </NavItem>
          <NavItem>
            <Link to="/">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Contact</Link>
          </NavItem>
        </NavList>
      </NavLeft>
      <NavRight>
        <NavCart>
          <AiOutlineShoppingCart size={25} />
        </NavCart>
        <NavUser>
          <IoExit size={25} />
        </NavUser>
      </NavRight>

      <Sidebar isClose={() => setVisible(!visible)} isOpen={visible} />
    </Nav>
  )
}
