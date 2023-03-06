import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CreateSchool from './CreateSchool'
import School from './School'
 class NavBar extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
        <ul>
            <li>
                <Link to="/create">create school</Link>
            </li>
            <li>
                <Link to="/list">school list</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/create' element={<CreateSchool/>}/>
            <Route path='/list' element={<School/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default NavBar;
