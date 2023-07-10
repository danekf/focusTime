# Focus Time
A  short term focus aid. Set a time you want to focus for. Connects to a web player(currently only spotify) and play new songs until the timer is up. Once the timer is up, the current song finishes and then no more songs are played.

## Dependencies
react router dom
redux toolkit
redux
redux persist

## Setup
<ol>
  <li>Create app using spotify dev using the [spotify dashboard](https://developer.spotify.com/dashboard)</li>
  <li>Set redrect URI when creating app to homepage (or http://localhost:3000 during development) </li>
  <li>Create new .env file, using example given.</li>
  <li>Set REACT_APP_HOME_URI in env to URI set in previous step.</li>
  <li>Get client ID from dashboard of new app, set REACT_APP_SPOTIFY_CLIENT_ID to the client ID given by spotify.</li>
</ol>

## TO DO

<ul>

  <li>Move login token to redux persisted state, on login page. Is currently just proof that spotify login works.
    <ul>
      <li>use persisted user info to show username in menu bar.</li>
    </ul>
  </li>

  <li>Allow redirect to more than just homepage, when logging in. Will require allowing more pages of redirects on spotify login when done.</li>
</ul>