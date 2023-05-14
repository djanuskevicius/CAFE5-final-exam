import { useState } from 'react';
import ICONS from '../../../../public/icons';
import {
  StyledDeleteButton,
  StyledEditButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledFormContainer,
} from './styles';

const User = ({ user, handleUpdateUser, handleDeleteUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${user._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        }
      );
      const data = await response.json();
      handleUpdateUser(data);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>
        <StyledEditButton onClick={() => setShowModal(true)}>
          Edit
        </StyledEditButton>
        <StyledDeleteButton onClick={() => handleDeleteUser(user)}>
          {ICONS.xmark}
        </StyledDeleteButton>
      </td>
      {showModal && (
        <td>
          <StyledFormContainer>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel htmlFor='name'>Name:</StyledLabel>
              <StyledInput
                type='text'
                name='name'
                id='name'
                value={updatedUser.name}
                onChange={handleInputChange}
              />
              <StyledLabel htmlFor='surname'>Surname:</StyledLabel>
              <StyledInput
                type='text'
                name='surname'
                id='surname'
                value={updatedUser.surname}
                onChange={handleInputChange}
              />
              <StyledLabel htmlFor='email'>Email:</StyledLabel>
              <StyledInput
                type='email'
                name='email'
                id='email'
                value={updatedUser.email}
                onChange={handleInputChange}
              />
              <StyledLabel htmlFor='age'>Age:</StyledLabel>
              <StyledInput
                type='text'
                name='age'
                id='age'
                value={updatedUser.age}
                onChange={handleInputChange}
              />
              <StyledButton type='submit'>Update</StyledButton>
              <StyledButton onClick={() => setShowModal(false)}>
                Cancel
              </StyledButton>
            </StyledForm>
          </StyledFormContainer>
        </td>
      )}
    </>
  );
};

export default User;
