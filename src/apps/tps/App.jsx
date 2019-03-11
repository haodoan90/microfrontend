import React from 'react';

import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>This is cheers app</h1>
    <Link to="/cheers">Go back to CHEERS</Link>
    &nbsp;&nbsp;
    <Link to="login">Go to Login</Link>
    <p>---</p>
  </div>
)