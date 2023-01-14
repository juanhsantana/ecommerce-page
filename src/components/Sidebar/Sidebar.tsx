import React from 'react'
import { HiXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { BackgroundSidebar, ModalSidebar, CloseButton, SideList, SideItem } from './styles.module'

type ParmsSidebar = {
    isOpen: boolean,
    isClose: VoidFunction,
}

export const Sidebar = ({ isOpen, isClose }: ParmsSidebar) => {
  if (isOpen) {
    return (
        <BackgroundSidebar>
            <ModalSidebar>
                <CloseButton onClick={isClose}>
                    <HiXMark size={25} />
                </CloseButton>
                <SideList>
                    <SideItem>
                        <Link to="/">Collections</Link>
                    </SideItem>
                    <SideItem>
                        <Link to="/">Men</Link>
                    </SideItem>
                    <SideItem>
                        <Link to="/">Woman</Link>
                    </SideItem>
                    <SideItem>
                        <Link to="/">About</Link>
                    </SideItem>
                    <SideItem>
                        <Link to="/">Contact</Link>
                    </SideItem>
                </SideList>
            </ModalSidebar>
        </BackgroundSidebar>
    )
  }

  return null
}
