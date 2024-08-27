import { createContext, useState } from 'react';
import { IModal, IModalsContext } from './modalTypes';

const defaultContext: IModalsContext = {
  isModalOpen: () => false,
  getModalData: () => null,
  handleModalClose: () => {},
  handleModalOpen: () => {},
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalWindowContext = createContext<IModalsContext>(defaultContext);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<IModal>({
    default: { isOpen: false, data: null },
  });

  const handleModalOpen = (modalName: string, data: string | null = null) => {
    setModals(state => ({ ...state, [modalName]: { isOpen: true, data } }));
  };

  const handleModalClose = (modalName: string) => {
    setModals(state => ({
      ...state,
      [modalName]: { isOpen: false, data: null },
    }));
  };

  const isModalOpen = (modalName: string) =>
    Boolean(modals[modalName]?.isOpen || false);

  const getModalData = (modalName: string) => modals[modalName]?.data || null;

  return (
    <ModalWindowContext.Provider
      value={{ isModalOpen, handleModalOpen, handleModalClose, getModalData }}
    >
      {children}
    </ModalWindowContext.Provider>
  );
}
