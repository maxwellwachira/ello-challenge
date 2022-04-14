import React from 'react';
import Logo from '../../images/logo.png';
import { Wrapper, Content, LogoImg } from './Header.styles';

const Header = () =>  (
    <Wrapper>
        <Content>
                <LogoImg src={Logo} alt='Ello-Logo' />
        </Content>
    </Wrapper>
)


export default Header;