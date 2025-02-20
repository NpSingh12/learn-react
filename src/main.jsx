import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'
import PostContext from './Context/PostContext.jsx'
// import IntegreatedAPI from './components/IntegreatedAPI.jsx'
// import"tailwindcss";

createRoot(document.getElementById('root')).render(
    <PostContext>

  <UserContext>

    <App/>
  </UserContext>
    </PostContext>
)
