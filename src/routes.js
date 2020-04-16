import React from 'react';
 
import SingIn from './Pages/SingIn'
import SingUp from './Pages/SingUp'
import Home from './Pages/Home'

export const routes = [
  {
    path: "/cursor_react_jss/",
    component: <Home />,
    exact: true,
  },
  {
    path: "/cursor_react_jss/sing_in",
    component: <SingIn />
  },
  {
    path: "/cursor_react_jss/sing_up",
    component: <SingUp />
  }
]