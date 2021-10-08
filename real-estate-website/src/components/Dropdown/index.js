import React from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button'
import {
    DropdownContainer,
    Icon,
    CloseIcon,
    DropdownWrapper,
    DropdownMenu,
    DropdownLink,
    BtnWrap,
} from './DropdownElements'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary='false' round='true' big='true' to='/contact'>Contact</Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
