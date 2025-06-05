import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';
import Layout from '../components/Layout';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='todo' element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter