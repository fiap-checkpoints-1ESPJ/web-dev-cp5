import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiUser } from 'react-icons/fi';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 64px;
  padding-inline: 2rem;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
    
  background-color: #43aa8b;
  z-index: 9999;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: medium;
  color: #f3f3f3;

  &:hover {
    color: #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  padding: 16px;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 10px 0;
  text-decoration: none;
  font-weight: medium;
  color: #888;

  &:hover {
    color: #333;
  }
`;

const NavSearchWrapper = styled.section`
    display: flex;
    align-items: center;
    column-gap: 2rem;
`

const UserButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid  #eee;
  }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <HeaderWrapper>
            <HamburgerButton onClick={toggleMenu}>
                <FiMenu size={20} />
            </HamburgerButton>

            <Nav>
                <NavLink href="#hero">Welcome</NavLink>
                <NavLink href="#benefits">Benefits</NavLink>
                <NavLink href="#functionalities">Funcionalities</NavLink>
                <NavLink href="#reviews">Reviews</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Nav>

            <MobileNav isOpen={menuOpen}>
                <MobileNavLink href="#hero">Welcome</MobileNavLink>
                <MobileNavLink href="#benefits">Benefits</MobileNavLink>
                <MobileNavLink href="#functionalities">Funcionalities</MobileNavLink>
                <MobileNavLink href="#reviews">Reviews</MobileNavLink>
                <MobileNavLink href="#contact">Contact</MobileNavLink>
            </MobileNav>

            <NavSearchWrapper>
                <UserButton>
                    <FiUser size={20} color='#f3f3f3'  />
                </UserButton>
            </NavSearchWrapper>
        </HeaderWrapper>
    );
};

export default Header;
