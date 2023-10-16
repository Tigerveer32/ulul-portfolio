import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { _default } from '../../themes/default';
import React from 'react';


export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  width: 140px;
  position: fixed;
  top: 10;
  left: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;

  @media (max-width: 1000px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 10px;
    text-decoration: none;
    @media (max-width: 1000px) {
        padding: 0 0px;
    }
    .logo-icon {
        margin-right: 8px; /* Atur margin sesuai keinginan Anda */
        svg {
            font-size: 24px; /* Atur ukuran ikon sesuai keinginan Anda */
            color: pink; /* Atur warna ikon sesuai keinginan Anda */
        }
    }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-left: 3px solid ${({ theme }) => theme.primary};
  }
`;


export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 105px;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;