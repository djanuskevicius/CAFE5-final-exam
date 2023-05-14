import React, { useState, useEffect } from 'react';
import User from '../../atoms/User/User';
import { StyledTableWrapper } from './styles';

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();
      setUsers(data);
    }

    fetchData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleUpdateUser = async (updatedUser) => {
    const response = await fetch(
      `http://localhost:5000/api/users/${updatedUser._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      }
    );

    const updatedUserData = await response.json();

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === updatedUserData._id ? updatedUserData : user
      )
    );
  };

  const handleDeleteUser = async (user) => {
    try {
      await fetch(`http://localhost:5000/api/users/${user._id}`, {
        method: 'DELETE',
      });
      setUsers((prevUsers) => prevUsers.filter((u) => u._id !== user._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledTableWrapper>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <User
                user={user}
                handleUpdateUser={handleUpdateUser}
                handleDeleteUser={handleDeleteUser}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        {pageNumbers.map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
    </StyledTableWrapper>
  );
}

export default UserList;
