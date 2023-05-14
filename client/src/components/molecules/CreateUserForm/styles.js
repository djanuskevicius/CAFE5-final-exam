import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  background-color: #1d2025;
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  max-width: 500px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #222;
  border-radius: 4px;
  background-color: #333;
  color: #eee;

  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  color: #eee;
`;

export const StyledButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0c7cd5;
  }
`;
