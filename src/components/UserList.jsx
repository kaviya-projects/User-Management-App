// UserList.jsx
import React from 'react';

const encode = (text) => {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    return text;
  }
};

function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h2>📋 User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>✏️</th>
              <th>🗑️</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{encode(user.name)}</td>
                <td>{encode(user.email)}</td>
                <td>
                  <button onClick={() => onEdit(user)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => onDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
