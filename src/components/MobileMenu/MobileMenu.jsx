import { useEffect } from "react";

import { CloseBtn } from "components/ModalContent/ModalContent.styled";
import Navigation from "components/Navigation";

import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import { StyledMobileMenu } from "./MobileMenu.styled";

export default function MobileMenu({ toggleMobileMenu }) {

        useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
    window.removeEventListener('scroll', onScroll);
    }
        }, []);
    
  const onScroll = () => {
    window.scrollTo(0,0);
  }
    
    return <StyledMobileMenu>
        <CloseBtn onClick={() => toggleMobileMenu()}><CloseIcon /></CloseBtn>
        <Navigation />
    </StyledMobileMenu>
 }