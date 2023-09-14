import { Button } from 'components/Form/Form.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';
import { delContactThunk, getContactsThunk } from 'redux/thunk';
import { styled } from 'styled-components';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const { contacts, isLoading, error } = useSelector(contactsSelector);
  const filter = useSelector(state => state.filter);

  const filterArray = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = ({ target }) => {
    dispatch(delContactThunk(target.parentElement.id));
  };

  return (
    <>
      {isLoading && (
        <Loader>
          <Rings />
        </Loader>
      )}

      <Ul>
        {filterArray.map(({ name, number, id }, idx) => (
          <Li
            key={id}
            id={id}
            style={{
              backgroundColor: idx % 2 === 0 ? '#f0e5e5' : '#c6afaf',
            }}
          >
            {name}: {number}
            <Button onClick={handleDelete}> Delete</Button>
          </Li>
        ))}
      </Ul>
      {error && <div>{error}</div>}
    </>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  background: bisque;
  font-size: 18px;
  font-weight: 500;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;
