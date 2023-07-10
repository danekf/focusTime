import './menu.css';

import { useState } from 'react';

const Menu = () => {

  const [pageState, setPageState] = useState({
    user: {},

  })

  return(
    <div className="menu">
      <div className="menuItem">Home</div>
      <div className="menuItem">Log In (spotify)</div>
      {/* displays spotify username */}
      {user && 
        <div className="menuItem">{pageState.user.username}</div>
      }
    </div>
  )
}