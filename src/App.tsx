import React from 'react'
import { HashRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Events from "./Events"
import Art from "./Art"
import DJs from "./DJs"

function App() {
  return (
    <>
      <div className="p-5 flex flex-col items-center justify-center">
        <div className='pb-10'>
          <img className="max-w-80 w-full" src="sitasound.svg"></img>
        </div>
      </div>
    </>
  )
}
export default App
