import React from 'react'
import {
  Link
} from "react-router-dom";
import { Menu, MenuList, MenuItem } from '../../assets/jss/style';

export default function Navigation() {
  return (
    <div>
      <Menu>
        <MenuList>
          <MenuItem>
            <Link to="/cursor_react_jss/sing_in">Sing In</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cursor_react_jss/sing_up">Sing Up</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}
