import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import Comments from "./components/Comments";
import Dashboard from './components/Dashboard'
import {Routes, Route} from 'react-router-dom'
import TopNavigationBar from "./components/TopNavigationBar";
import Socket from "./components/Socket/Socket";
import ToggleUser from './components/ToggleUser'

function App() {


  return(
    <div >
      <TopNavigationBar />
      <Routes>
        <Route path='/' element={<Dashboard />}>Dashboard</Route>
        <Route path="/socket" element={<Socket />}>Socket</Route>
        <Route path="/todos" element={<TodoList />}>Todo</Route>
        <Route path="/comments" element={<Comments />}>Comments</Route>
        <Route path="/user" element={<ToggleUser />}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
