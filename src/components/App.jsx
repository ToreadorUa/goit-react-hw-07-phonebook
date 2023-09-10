import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { Container } from './Form/Form.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
