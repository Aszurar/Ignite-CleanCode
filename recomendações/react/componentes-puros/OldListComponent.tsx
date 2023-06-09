import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [newUser, setNewUser] = useState<User>({ id: 0, name: '' });

  const addUser = () => {
    //...
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={addUser}>Adicionar Usuário</button>
    </div>
  );
};

export default UserList;