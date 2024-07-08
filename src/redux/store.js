import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';
import { authReducer } from './auth/slice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authReducer,
  },
});

export { store };
