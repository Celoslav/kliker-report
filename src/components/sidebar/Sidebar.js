import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './sidebar.css';

export default () => (
  <div className="sidebar">
    <h3 className="brand-header">
      <Link className="brand" to="/">
        KLIKER LOGS
      </Link>
    </h3>
    <br />
    <ul className="links">
      <li>
        <NavLink
          className="link"
          activeStyle={{
            fontWeight: 'bold',
            color: 'aqua'
          }}
          to="/courses"
        >
          Kursevi
        </NavLink>
      </li>
      <li>
        <NavLink
          className="link"
          activeStyle={{
            fontWeight: 'bold',
            color: 'aqua'
          }}
          to="/teachers/"
        >
          Predavači
        </NavLink>
      </li>
      <li>
        <NavLink
          className="link"
          activeStyle={{
            fontWeight: 'bold',
            color: 'aqua'
          }}
          to="/students/"
        >
          Polaznici
        </NavLink>
      </li>
      <li>
        <NavLink
          className="link"
          activeStyle={{
            fontWeight: 'bold',
            color: 'aqua'
          }}
          to="/presence/"
        >
          Prisustvo
        </NavLink>
      </li>
      <li>
        <NavLink
          className="link"
          activeStyle={{
            fontWeight: 'bold',
            color: 'aqua'
          }}
          to="/paying/"
        >
          Plaćanje
        </NavLink>
      </li>
    </ul>
  </div>
);
