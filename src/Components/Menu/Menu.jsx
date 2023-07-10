import './menu.css';
import SpotifyAuth from './Spotify Auth/SpotifyAuth';

import { useState } from 'react';

const Menu = () => {

  //currently static, always redirecting to home page.
  const currentPage = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

  const [pageState, setPageState] = useState({
    user: {},

  })

  return(
    <div className="menu">
      <div className="menuItem">Home</div>
      <div className="menuItem"><SpotifyAuth redirectURI={currentPage}/></div>
      <div className="menuItem"></div>
      {/* displays spotify username */}
      {pageState.user && 
        <div className="menuItem">{pageState.user.username}</div>
      }
    </div>
  )
}

export default Menu;