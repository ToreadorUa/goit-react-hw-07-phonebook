import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, delContact, getContacts } from 'api/apiContacts';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);

export const addContactThunk = createAsyncThunk('contacts/add', contact =>
  addContact(contact)
);

export const delContactThunk = createAsyncThunk('contacts/delete', id =>
  delContact(id)
);
