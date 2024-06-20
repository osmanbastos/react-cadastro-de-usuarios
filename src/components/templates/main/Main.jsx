import './Main.css'
import React from 'react'
import Header from '../header/Header'
import UserForm from '../../UserForm'

const Main = props => 
    <>
      <Header {...props} />
      <main className="content">
        <UserForm />
      </main>
    </>

export default Main;