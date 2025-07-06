import React, { useState, useEffect } from 'react';

function UserForm({ addUser, selectedUser, updateUser, clearEdit }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
    else setUser({ name: '', email: '' });
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedUser ? updateUser(user) : addUser(user);
    setUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>{selectedUser ? '✏️ Edit User' : '➕ Add New User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button type="submit">{selectedUser ? 'Update' : 'Add'}</button>
        {selectedUser && (
          <button type="button" onClick={clearEdit}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default UserForm;
