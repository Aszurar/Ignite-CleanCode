import React from 'react';

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
  onAddUser: () => void;
}

const UserList: React.FC<UserListProps> = ({ users, onAddUser }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={onAddUser}>Adicionar Usuário</button>
    </div>
  );
};

export default UserList;