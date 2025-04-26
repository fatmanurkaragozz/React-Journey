import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000";


function App() {

  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  }

  const createUser = async (newUser) => {
    // POST: veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    // PUT: veri güncellemek için kullanılır.
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    console.log(response.data);
  }

  const deleteUser = async (userId) => {
    // DELETE: veri silmek için kullanılır.
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  }

  useEffect(() => {
    getAllUsers();
    getUserById(1);

    const newUser = {
      name: "Ahmet",
      password: "123456",
    }
    // createUser(newUser);

    updateUser(1, {
      name: "Mehmet",
      password: "654321"
    })

    deleteUser("2");
  }, [])



  return (
    <div>

    </div>
  )
}

export default App
