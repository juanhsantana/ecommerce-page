import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 5px 20px;
`

export const ButtonSidebar = styled.button`
  display: none;
  height: 100%;
  border: none;
  background-color: transparent;

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 790px) {
    display: block;
    justify-content: center;
    align-items: center;
  }
`

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 100px;

  @media screen and (max-width: 790px) {
    gap: 20px;
  }
`

export const NavLogo = styled.h2``

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 790px) {
    display: none;
  }
`

export const NavItem = styled.li`
  display: flex;
  gap: 8px;

  > a {
    font-weight: 400;
    color: #888888;
    transition: all 0.2s ease-in-out;

    :hover {
      color: #000000;
    }
  }
`

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 30px;
`

export const NavCart = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`

export const NavUser = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`
