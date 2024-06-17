import './Main.css'
import React from 'react'
import Header from '../header/Header'
import UserForm from '../../UserForm'

export default function Main() {
  return (
    <>
      <Header />
      <main className="content">
        <UserForm />
      </main>
    </>
  )
}