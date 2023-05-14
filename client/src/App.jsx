import './App.css';
import UserList from './components/molecules/UserList';
import CreateUserForm from './components/molecules/CreateUserForm';

function App() {
  return (
    <>
      <div className='container'>
        <CreateUserForm />
        <UserList />
      </div>
    </>
  );
}

export default App;
