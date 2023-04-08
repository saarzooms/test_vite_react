import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import List from './components/List'

function App() {
  const items = ['Rajkot','Jamnagar','Surat',"Amreli"]
  const fruits = ['Apple','Banana','Grapes']
  // return <Button text="MyButton" color="primary"/>
  return <><List items={items} title="Cities"/>
   <hr/>
   <List items={fruits} title="Fruits"/>
   </>
}

export default App
