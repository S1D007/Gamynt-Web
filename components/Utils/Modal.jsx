import React, { useState } from 'react';

function Modal({closeModal , children}) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.classList.add('no-scroll');
  }

  function closeModalmain() {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  }

  return (
    <main className='modal_main'>
        <button>goodi n d iv</button>
         {children}
         {
            isOpen === true?<div>hello ok</div>:<div>closed div</div> 
         }
    </main>
  );
}


export default Modal;