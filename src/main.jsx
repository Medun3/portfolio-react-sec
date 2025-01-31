import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import App from './App.jsx'
import Intro from "./intro.jsx"
import Credentials from './Credentials.jsx'
import Project from './project.jsx'
import Contact from './contact.jsx'

import Html from './credentailsFile/html.jsx'
import Other from './credentailsFile/other.jsx'
import Javascript from './credentailsFile/javasrcipt.jsx'
import ReactJS from './credentailsFile/react.jsx'
import Node from './credentailsFile/node.jsx'
import Express from './credentailsFile/express.jsx'
import MongoDB from './credentailsFile/mongodb.jsx'
import Git from './credentailsFile/git.jsx'
import C from './credentailsFile/c.jsx'


createRoot(document.getElementById('root')).render(
  
  <Router>
      <nav><Link to="/"></Link></nav>
    <Routes>
      
      <Route path ="*" element={<App />} />
      <Route path ="/introduction" element={<Intro/>} />
      <Route path ="/Credentials" element ={<Credentials/>} />
      <Route path ="/Project" element ={<Project/>} />
      <Route path ="/Contact" element ={<Contact/> } />
      <Route path ="/Html"  element ={<Html/>} />
      <Route path ="/Other"  element ={<Other/>}/>
      <Route path ="/Javascript"  element ={<Javascript/>}/>
      <Route path ="/ReactJS" element ={<ReactJS/>}/>
      <Route path ="/Node"  element ={<Node/>}/>
      <Route path ="/Express"  element ={<Express/>}/>
      <Route path ="/MongoDB"  element ={<MongoDB/>}/>
      <Route path ="/Git"  element ={<Git/>}/>
      <Route path ="/C"  element ={<C/>}/>
           
    </Routes>
  </Router>
)
