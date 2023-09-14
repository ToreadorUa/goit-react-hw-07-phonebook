import axios from 'axios';

const BASE_URL = 'https://64fcb2a3605a026163aebe9d.mockapi.io/api/v1';

export const getContacts = async () => {
  const resp = await axios.get(`${BASE_URL}/contacts`);
  console.log(resp);
  return resp;
};

export const addContact = async contact => {
  const resp = await axios.post(`${BASE_URL}/contacts`, contact);
  return resp;
};

export const delContact = async id => {
  const resp = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return resp;
};
