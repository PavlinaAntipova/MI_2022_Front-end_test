import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "./ModalUpload.styled";

const modalRoot = document.querySelector('#modal-root');

export default function ModalUpload({toggleModal, children }) {
     
    useEffect(() => {
    
    window.addEventListener("keydown", onEsc);
    window.addEventListener('scroll', onScroll);

    return () => {
    
    window.removeEventListener("keydown", onEsc);
    window.removeEventListener('scroll', onScroll);
    }
    }, []);
    
    const onEsc = (e) => {
    if (e.code === "Escape") {
      toggleModal();
}
  }

  const onScroll = () => {
    window.scrollTo(0,0);
  }

  const onOverlay = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
   }

    return createPortal(<Overlay onClick={onOverlay}>
         {children}
     </Overlay>, modalRoot);
}
 