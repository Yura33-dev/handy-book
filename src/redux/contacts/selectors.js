import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectContactById = contactId =>
  createSelector([selectContacts], contacts => {
    const contact = contacts.filter(contact => contact.id === contactId);

    return contact;
  });

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );

    return filteredContacts;
  }
);
