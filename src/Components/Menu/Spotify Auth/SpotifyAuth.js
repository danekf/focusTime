import { redirect } from "react-router-dom";



const SpotifyAuth = (props) =>{
  const { redirectURI } = props;
  
  //Spotify required links to login
  const spotifyClientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const responseType = 'token';

  return (
    <a href={`${authEndpoint}?client_id=${spotifyClientID}&redirect_uri=${redirectURI}&response_type=${responseType}`}>Login to Spotify</a>
  )
}

export default SpotifyAuth;


