import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalWindowContext = createContext({});

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const context = { open, handleOpen, handleClose };

  return (
    <ModalWindowContext.Provider value={context}>
      {children}
    </ModalWindowContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.element,
};
