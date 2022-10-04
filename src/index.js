import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSetting } from 'react-icons/ai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav>
    <span className="navbar-brand">Todo List</span>
    <AiOutlineSetting/>
    </Nav>
    <ItemList />
    <Footer>
      <p className='text-end'>
        Copyright &copy; <a className="fw-bold text-reset" href='https://github.com/nicku3d'>github.com/nicku3d</a>
      </p>
    </Footer>
  </React.StrictMode>
);
