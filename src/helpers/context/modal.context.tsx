import { createContext, useState } from 'react';
import { IModal, IModalsContext } from './modalTypes';
import { ModalConstants } from '../constants/modalConstants';

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

const initialModalsState = Object.values(ModalConstants).reduce(
  (accObj, currentModalName) => {
    accObj[currentModalName] = {
      isOpen: false,
      data: null,
    };

    return accObj;
  },
  {} as IModal
);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<IModal>(initialModalsState);

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
