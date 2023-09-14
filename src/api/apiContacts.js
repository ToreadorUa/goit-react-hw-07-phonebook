import axios from 'axios';

const BASE_URL = 'https://64fcb2a3605a026163aebe9d.mockapi.io/api/v1';

export const getContacts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const addContact = async contact => {
  try {
    const resp = await axios.post(`${BASE_URL}/contacts`, contact);
    return resp.data;
  } catch (error) {
    return error.message;
  }
};

export const delContact = async id => {
  try {
    const resp = await axios.delete(`${BASE_URL}/contacts/${id}`);
    console.log(resp.data.id);
    return resp.data.id;
  } catch (error) {
    return error.message;
  }
};
