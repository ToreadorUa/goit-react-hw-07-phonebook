import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, delContact, getContacts } from 'api/apiContacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await getContacts();
      if (resp.status !== 200) throw new Error('Something went wrong');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const resp = await addContact(contact);
      if (resp.status !== 201) throw new Error('Something went wrong');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const delContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await delContact(id);
      if (resp.status !== 200) throw new Error('Something went wrong');
      return resp.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
