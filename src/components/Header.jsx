import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiUser } from 'react-icons/fi';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 64px;
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  position: relative;
  margin-left: auto;

  @media (min-width: 768px) {
    width: auto;
    margin-left: 16px;
  }

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }
`;

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
        setMenuOpen(!menuOpen);
    };

    return (
        <HeaderWrapper>
            <HamburgerButton onClick={toggleMenu}>
                <FiMenu size={20} />
            </HamburgerButton>

            <Nav>
                <NavLink href="#">Welcome</NavLink>
                <NavLink href="#">Benefits</NavLink>
                <NavLink href="#">Funcionalities</NavLink>
                <NavLink href="#">Reviews</NavLink>
                <NavLink href="#">Contact</NavLink>
            </Nav>

            <MobileNav isOpen={menuOpen}>
                <MobileNavLink href="#">Welcome</MobileNavLink>
                <MobileNavLink href="#">Benefits</MobileNavLink>
                <MobileNavLink href="#">Funcionalities</MobileNavLink>
                <MobileNavLink href="#">Reviews</MobileNavLink>
                <MobileNavLink href="#">Contact</MobileNavLink>
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
