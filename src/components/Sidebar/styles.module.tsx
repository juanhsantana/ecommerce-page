import styled from "styled-components"

export const BackgroundSidebar = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(3px);
`

export const ModalSidebar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 20px;
  inset: 0 30% 0 0;
  border-radius: 0 10px 10px 0;
  background-color: white;
  -webkit-box-shadow: 0px 0px 45px -17px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 45px -17px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 45px -17px rgba(0, 0, 0, 0.2);
`

export const CloseButton = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
`

export const SideList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 15px;
`

export const SideItem = styled.li`
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
