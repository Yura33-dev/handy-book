export interface IModalsContext {
  isModalOpen: (modalName: string) => boolean;
  getModalData: (modalName: string) => string | null;
  handleModalOpen: (modalName: string, data?: string | null) => void;
  handleModalClose: (modalName: string) => void;
}

export interface IModal {
  [prop: string]: {
    isOpen: boolean;
    data: string | null;
  };
}
