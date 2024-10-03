import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';

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
  transition: color 0.3s;
  &:hover {
    color: #333;
  }

  &.active {
    color: #333;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;

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
  transition: color 0.3s;

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

const Input = styled.input`
  padding: 8px 8px 8px 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }

  @media (min-width: 1024px) {
    width: 300px;
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

  &:hover {
    background-color: #eee;
    color: grey;
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
                <SearchContainer>
                    <FiSearch size={16} />
                    <Input type="search" placeholder="Search products..." />
                </SearchContainer>

                <UserButton>
                    <FiUser size={20} color='#f3f3f3' />
                </UserButton>
            </NavSearchWrapper>
        </HeaderWrapper>
    );
};

export default Header;
