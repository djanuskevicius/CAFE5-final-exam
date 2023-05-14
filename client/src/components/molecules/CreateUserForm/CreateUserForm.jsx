import { useState } from 'react';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledFormContainer,
} from './styles';

const CreateUserForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    surname: '',
    email: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setUserDetails({
      name: '',
      surname: '',
      email: '',
      age: '',
    });
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor='name'>Name:</StyledLabel>
        <StyledInput
          type='text'
          name='name'
          id='name'
          value={userDetails.name}
          onChange={handleInputChange}
          required
        />
        <StyledLabel htmlFor='surname'>Surname:</StyledLabel>
        <StyledInput
          type='text'
          name='surname'
          id='surname'
          value={userDetails.surname}
          onChange={handleInputChange}
          required
        />
        <StyledLabel htmlFor='email'>Email:</StyledLabel>
        <StyledInput
          type='email'
          name='email'
          id='email'
          value={userDetails.email}
          onChange={handleInputChange}
          required
        />
        <StyledLabel htmlFor='age'>Age:</StyledLabel>
        <StyledInput
          type='text'
          name='age'
          id='age'
          value={userDetails.age}
          onChange={handleInputChange}
          required
        />
        <StyledButton type='submit'>Create User</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default CreateUserForm;
