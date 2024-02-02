import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Master } from './Component/Master'
import { Home } from './Component/Home'
import { About } from './Pages/About'
import { Services } from './Pages/Services'
import { Skill } from './Pages/Skill'
import { Projects } from './Pages/Projects'
import { Team } from './Pages/Team'
import { Contact } from './Pages/Contact'
import { Testimonail } from './Pages/Testimonail'

export const Phome = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Master Man={Home} />}></Route>
            <Route path='/about' element={<Master Man={About} />}></Route>
            <Route path='/skill' element={<Master Man={Skill} />}></Route>
            <Route path='/service' element={<Master Man={Services} />}></Route>
            <Route path='/project' element={<Master Man={Projects} />}></Route>
            <Route path='/team' element={<Master Man={Team} />}></Route>
            <Route path='/testimonial' element={<Master Man={Testimonail} />}></Route>
            <Route path='/contact' element={<Master Man={Contact} />}></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}
