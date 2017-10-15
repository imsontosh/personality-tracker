import React, { Component } from "react";

const Header = (props)=>(
      <div>
        <header>
          <div className="wrapper">
            <h1>{props.user && props.user.displayName} Personality Tracker</h1>
            {props.user
              ? <button onClick={props.logout}>Logout</button>
              : <button onClick={props.login}>Log In</button>}
          </div>
        </header>
        {props.user
          ? <div>
              <div className="user-profile">
                <img src={props.user.photoURL} />
              </div>
            </div>
          : <div className="wrapper">
              <p>
                You must be logged in to see the  details and submit to it.
              </p>
            </div>}
      </div>
)

export default Header;
