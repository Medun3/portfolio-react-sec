import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import App from './App.jsx'
import Intro from "./component/intro.jsx"
import Credentials from './component/Credentials.jsx'
import Project from './component/project.jsx'
import Contact from './component/contact.jsx'

import Html from './component/credentailsFile/html.jsx'
import Other from './component/credentailsFile/other.jsx'
import Javascript from './component/credentailsFile/javasrcipt.jsx'
import ReactJS from './component/credentailsFile/react.jsx'
import Node from './component/credentailsFile/node.jsx'
import Express from './component/credentailsFile/express.jsx'
import MongoDB from './component/credentailsFile/mongodb.jsx'
import Git from './component/credentailsFile/git.jsx'
import C from './component/credentailsFile/c.jsx'


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
