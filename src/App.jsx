import './App.css'
import { useState, useEffect } from 'react';
import Todos from './components/todos';
import TodoForm from './components/todo-form';
import Navbar from './components/navbar';

export default function App(){
  return (
    <div className='App m-0'>
      <Todos/>
    </div>
  )
}