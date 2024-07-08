import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});

export { store };
