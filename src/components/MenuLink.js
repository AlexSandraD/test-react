import React from 'react';
import { NavLink } from 'react-router-dom';
import home from './../images/home.svg';
import contacts from './../images/contacts.svg';
import favourites from './../images/favourites.svg';
import people from './../images/people.svg';
import companies from './../images/companies.svg';

export const MenuView = () => (
  <div className="menu">
    <div className="menu_div">
      <img src={home} className="menu_img" alt="home" />
      <NavLink to="/home">HOME</NavLink>
    </div>
    <div className="menu_div">
      <img src={contacts} className="menu_img" alt="contacts" />
      <NavLink to="/contacts">CONTACTS</NavLink>
    </div>
    <div className="menu_div">
      <img src={favourites} className="menu_img" alt="favourites" />
      <NavLink to="/favourites">FAVOURITES</NavLink>
    </div>
    <div className="menu_div">
      <img src={people} className="menu_img" alt="people" />
      <NavLink to="/people" className="normal" activeClassName="active">PEOPLE</NavLink>
    </div>
    <div className="menu_div">
      <img src={companies} className="menu_img" alt="companies" />
      <NavLink to="/companies" className="normal" activeClassName="active">COMPANIES</NavLink>
    </div>
  </div>
);

export default MenuView;
