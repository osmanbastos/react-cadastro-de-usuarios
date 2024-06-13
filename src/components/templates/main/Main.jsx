import './Main.css'
import React, { useState } from 'react'
import Header from '../header/Header'
import UserForm from '../../UserForm'

export default function Main() {
  return (
    <main className="main">
      <Header />
      <UserForm />
    </main>
  )
}