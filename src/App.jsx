import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const API = 'http://127.0.0.1:5001/users';

// Display only: encode
const encode = (text) => {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    return text;
  }
};

// Decode
const decode = (text) => {
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch {
    return text;
  }
};

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch and encode for UI
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API);
      const encodedUsers = response.data.map(user => ({
        ...user,
        name: encode(user.name),
        email: encode(user.email),
      }));
      setUsers(encodedUsers);
    } catch (error) {
      console.error('❌ Error fetching users:', error.message);
      alert('Failed to fetch users');
    }
  };

  // Add user — store in plain text
  const addUser = async (user) => {
    try {
      if (!user.name || !user.email) {
        alert('⚠️ Name and email are required');
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name: user.name,
        email: user.email
      };

      await axios.post(API, newUser);

      const encodedLog = {
        ...newUser,
        name: encode(newUser.name),
        email: encode(newUser.email),
      };
      console.log('✅ User added:', encodedLog);

      fetchUsers();
    } catch (error) {
      console.error('❌ Error adding user:', error.message);
      alert('Failed to add user');
    }
  };

  // Update user — also in plain text
  const updateUser = async (user) => {
    try {
      if (!user.id) {
        alert('⚠️ Cannot update user: Missing ID');
        return;
      }

      const updatedUser = {
        id: String(user.id),
        name: user.name,
        email: user.email
      };

      await axios.put(`${API}/${updatedUser.id}`, updatedUser);

      const encodedLog = {
        ...updatedUser,
        name: encode(updatedUser.name),
        email: encode(updatedUser.email),
      };
      console.log('✅ User updated:', encodedLog);

      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      console.error('❌ Error updating user:', error.message);
      alert('Failed to update user');
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API}/${String(id)}`);
      console.log('🗑️ User deleted:', encode(String(id)));
      fetchUsers();
    } catch (error) {
      console.error('❌ Error deleting user:', error.message);
      alert('Failed to delete user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>User Management App 🔐</h1>

      <UserForm
        addUser={addUser}
        selectedUser={selectedUser}
        updateUser={updateUser}
        clearEdit={() => setSelectedUser(null)}
      />

      <hr />

      <UserList
        users={users}
        onEdit={(user) =>
          setSelectedUser({
            ...user,
            name: decode(user.name),
            email: decode(user.email),
          })
        }
        onDelete={(id) => deleteUser(String(id))}
      />
    </div>
  );
}

export default App;
